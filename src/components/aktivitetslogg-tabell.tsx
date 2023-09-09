import React, { ChangeEvent, useState } from "react";
import {
  HStack,
  Label,
  Select,
  Skeleton,
  Table,
  TextField,
  Tooltip,
} from "@navikt/ds-react";
import { Aktivitet, Aktivitetslogg, Kontekst } from "@/lib/aktivitetslogg-api";
import _ from "lodash";
import styles from "@/components/aktivitetslogg-tabell.module.css";

export default function AktivitetsloggTabell({
  isLoading,
  data,
  antallAktiviteter,
}: {
  isLoading: boolean;
  data: Aktivitetslogg[];
  antallAktiviteter: number | undefined;
}) {
  const [filterIdent, setIdentFilter] = useState("");
  const [filterHendelse, setHendelseFilter] = useState("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIdentFilter(event.target.value);
  };
  const handleEventTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHendelseFilter(event.target.value);
  };

  const hendelser = _.uniq(data.map((item) => item.hendelse.type));
  const system = data.map(
    (item) => item.systemParticipatingServices[0].service,
  );

  let filteredData = data.filter((item) =>
    item.ident.toLowerCase().includes(filterIdent.toLowerCase()),
  );

  if (filterHendelse != "") {
    filteredData = filteredData.filter(
      (item) => item.hendelse.type == filterHendelse,
    );
  }

  return (
    <>
      <form className={styles.form}>
        <HStack gap={"4"} align={"start"}>
          <TextField
            type="text"
            value={filterIdent}
            onChange={handleFilterChange}
            label="Filter på ident"
            size={"small"}
          />
          <Select
            label={"Hendelsetype"}
            defaultValue={filterHendelse}
            onChange={handleEventTypeChange}
            size={"small"}
          >
            <option value="">Alle</option>
            {hendelser.map((hendelse) => (
              <option value={hendelse} key={hendelse}>
                {hendelse}
              </option>
            ))}
          </Select>
        </HStack>
      </form>
      <div className={styles.antallAktiviteter}>
        <Label size={"small"}>Antall aktiviteter: {antallAktiviteter}</Label>
      </div>
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
          {isLoading ? (
            <SkeletonRow />
          ) : (
            filteredData.map((aktivitetslogg) => (
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
