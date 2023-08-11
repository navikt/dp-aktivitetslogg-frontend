import React, { ChangeEvent, useState } from "react";
import { Loader, Table, Tooltip } from "@navikt/ds-react";
import { Aktivitet, Aktivitetslogg, Kontekst } from "@/lib/aktivitetslogg-api";

export default function AktivitetsloggTabell({
  data,
}: {
  data: Aktivitetslogg[];
}) {
  const [filterIdent, setFilterIdent] = useState("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterIdent(event.target.value);
  };

  if (!data) return <Loader>Venter på aktivitetslogger</Loader>;

  const filteredData = data.filter((item) =>
    item.ident.toLowerCase().includes(filterIdent.toLowerCase()),
  );

  return (
    <>
      <input
        type="text"
        value={filterIdent}
        onChange={handleFilterChange}
        placeholder="Filter by Ident"
      />
      <Table size={"small"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="col">Timestamp</Table.HeaderCell>
            <Table.HeaderCell scope="col">Event Type</Table.HeaderCell>
            <Table.HeaderCell scope="col">Event ID</Table.HeaderCell>
            <Table.HeaderCell scope="col">System</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredData.map((aktivitetslogg) => (
            <Table.ExpandableRow
              key={aktivitetslogg.id}
              expandOnRowClick={true}
              content={<Meldinger data={aktivitetslogg.aktiviteter} />}
            >
              <Table.DataCell scope="row">
                {aktivitetslogg.opprettet.toLocaleString()}
              </Table.DataCell>
              <Table.DataCell>{aktivitetslogg.hendelse.type}</Table.DataCell>
              <Table.DataCell>
                {aktivitetslogg.hendelse.meldingsreferanseId}
              </Table.DataCell>
              <Table.DataCell>
                {aktivitetslogg.systemParticipatingServices[0].service}
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

function Meldinger({ data }: { data: Aktivitet[] }) {
  return (
    <Table size={"small"}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Alvorlighetsgrad</Table.HeaderCell>
          <Table.HeaderCell scope="col">Melding</Table.HeaderCell>
          <Table.HeaderCell scope="col">Kontekster</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((aktivitet) => (
          <Table.Row
            key={
              aktivitet.melding +
              aktivitet.tidsstempel +
              aktivitet.kontekster.length
            }
          >
            <Table.DataCell>{aktivitet.alvorlighetsgrad}</Table.DataCell>
            <Table.DataCell>
              {aktivitet.melding} - {JSON.stringify(aktivitet.detaljer)}
            </Table.DataCell>
            <Table.DataCell>
              <Kontekster kontekster={aktivitet.kontekster} />{" "}
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Kontekster({ kontekster }: { kontekster: Kontekst[] }) {
  return kontekster.map((kontekst, index) => {
    const kontekstMapEntries = Object.entries(kontekst.kontekstMap);
    const kontekstMapString = kontekstMapEntries
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    return (
      <React.Fragment key={index}>
        {index > 0 && <span>{" > "}</span>}
        <Tooltip content={kontekstMapString}>
          <span>{kontekst.kontekstType}</span>
        </Tooltip>
      </React.Fragment>
    );
  });
}
