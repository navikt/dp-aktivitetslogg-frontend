import React from "react";
import { Skeleton, Table, Tooltip } from "@navikt/ds-react";
import { Aktivitet, Aktivitetslogg, Kontekst } from "@/lib/aktivitetslogg-api";

export default function AktivitetsloggTabell({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: Aktivitetslogg[];
}) {
  return (
    <>
      <Table size={"small"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="col">Tid</Table.HeaderCell>
            <Table.HeaderCell scope="col">Hendelses Type</Table.HeaderCell>
            <Table.HeaderCell scope="col">Hendelses ID</Table.HeaderCell>
            <Table.HeaderCell scope="col">Tjenester</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <SkeletonRow />
          ) : (
            data.map((aktivitetslogg) => (
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
            ))
          )}
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

function SkeletonRow() {
  return (
    <>
      <Table.ExpandableRow key={1} expandOnRowClick={false} content={<div />}>
        <Table.DataCell scope="row">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          {" "}
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          <Skeleton />
        </Table.DataCell>
      </Table.ExpandableRow>
      <Table.ExpandableRow key={1} expandOnRowClick={false} content={<div />}>
        <Table.DataCell scope="row">
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          {" "}
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          <Skeleton />
        </Table.DataCell>
        <Table.DataCell>
          <Skeleton />
        </Table.DataCell>
      </Table.ExpandableRow>
    </>
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
