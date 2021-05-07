<template>
  <FullCalendar :events="events" :options="options" style="width: 50%; margin:auto"/>
<!--  <table style="margin:auto">
    <tr>
      <th/>
      <th>SEGUNDA</th>
      <th>TERÇA</th>
      <th>QUARTA</th>
      <th>QUINTA</th>
      <th>SEXTA</th>
      <th>SÁBADO</th>
      <th>DOMINGO</th>
    </tr>
    <tr>
      <td></td><td colspan="7">MANHÃ</td>
    </tr>
    <tr>
      <td>M1 — 07h00 às 07h50</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M2 — 07h50 às 08h40</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M3 — 08h55 às 09h45</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M4 — 09h45 às 10h35</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M5 — 10h50 às 11h40</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>M6 — 11h40 às 12h30</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td><td colspan="7">TARDE</td>
    </tr>
    <tr>
      <td>T1 — 13h00 às 13h50</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>T2 — 13h50 às 14h40</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>T3 — 14h55 às 15h45</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>T4 — 15h45 às 16h35</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>T5 — 16h50 às 17h40</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>T6 — 17h40 às 18h30</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td><td colspan="7">NOITE</td>
    </tr>
    <tr>
      <td>N1 — 18h45 às 19h35</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>N2 — 19h35 às 20h25</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>N3 — 20h35 às 21h25</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>N4 — 21h25 às 22h15</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>-->
  <DataTable
      :value="turmas"
      groupRowsBy="nome-componente"
      rowGroupMode="subheader"
      scrollHeight="80vh"
      scrollable
  >
    <Column field="codigo-turma" header="Código" style="width: 2rem"></Column>
    <Column header="Docentes">
      <template #body="slotProps">
        <span v-if="slotProps.data.docentes">{{ slotProps.data.docentes.filter((docente) => docente['nome-docente']).map((docentes) => docentes['nome-docente']).join(', ') }}</span>
      </template>
    </Column>
    <Column field="capacidade-aluno" header="Capacidade"></Column>
    <Column field="descricao-horario" header="Capacidade"></Column>
    <Column field="local" header="Local"></Column>
    <Column field="ano" header="Ano"></Column>
    <Column field="periodo" header="Período"></Column>
    <Column>
      <template #body="slotProps">
        <Button :disable="!slotProps.data['descricao-horario']" @click="addTurma(slotProps.data)" label="Adicionar Turma"></Button>
      </template>
    </Column>
    <template #groupheader="slotProps">
      <span class="fas fa-book"></span>
      <span class="image-text p-ml-2">
        {{ slotProps.data["codigo-componente"] }}-{{
          slotProps.data["nome-componente"]
        }}</span
      >
    </template>
  </DataTable>
</template>


<script>
import "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import moment from "moment";

export default {
  name: "App",
  components: {},
  data() {
    return {
      turmas: [],
      env: null,
      config: {},
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialDate: '2021-08-01',
        slotDuration: "00:15:00",
        slotLabelInterval: "00:15:00",
        slotMinTime: "07:00",
        slotMaxTime: "22:15",
        initialView: "timeGridWeek",
        allDaySlot: false,
        editable: true,
        height: "50vh",
        headerToolbar:{
          start: '',
          center: '',
          end: ''
        },
      dayHeaderFormat:{
        weekday: 'long'
      },
      slotLabelFormat:{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: false,
        meridiem: 'short',
      },
      locale: 'pt-br',

    },
      events: [],
      horarios: {
        "M1": {
          "start": { "hours": 7, "minutes": 0 },
          "end": { "hours": 7, "minutes": 50 }
        },
        "M2": {
          "start": { "hours": 7, "minutes": 50 },
          "end": { "hours": 8, "minutes": 40 }
        },
        "M3": {
          "start": { "hours": 8, "minutes": 55 },
          "end": { "hours": 9, "minutes": 45 }
        },
        "M4": {
          "start": { "hours": 9, "minutes": 45 },
          "end": { "hours": 10, "minutes": 35 }
        },
        "M5": {
          "start": { "hours": 10, "minutes": 50 },
          "end": { "hours": 11, "minutes": 40 }
        },
        "M6": {
          "start": { "hours": 11, "minutes": 40 },
          "end": { "hours": 12, "minutes": 30 }
        },
        "T1": {
          "start": { "hours": 13, "minutes": 0 },
          "end": { "hours": 13, "minutes": 50 }
        },
        "T2": {
          "start": { "hours": 13, "minutes": 50 },
          "end": { "hours": 14, "minutes": 40 }
        },
        "T3": {
          "start": { "hours": 14, "minutes": 55 },
          "end": { "hours": 15, "minutes": 45 }
        },
        "T4": {
          "start": { "hours": 15, "minutes": 45 },
          "end": { "hours": 16, "minutes": 35 }
        },
        "T5": {
          "start": { "hours": 16, "minutes": 50 },
          "end": { "hours": 17, "minutes": 40 }
        },
        "T6": {
          "start": { "hours": 17, "minutes": 40 },
          "end": { "hours": 18, "minutes": 30 }
        },
        "N1": {
          "start": { "hours": 18, "minutes": 45 },
          "end": { "hours": 19, "minutes": 35 }
        },
        "N2": {
          "start": { "hours": 19, "minutes": 35 },
          "end": { "hours": 20, "minutes": 25 }
        },
        "N3": {
          "start": { "hours": 20, "minutes": 35 },
          "end": { "hours": 21, "minutes": 25 }
        },
        "N4": {
          "start": { "hours": 21, "minutes": 25 },
          "end": { "hours": 22, "minutes": 15 }
        }
      }

    };

  },
  mounted() {
    this.env = process.env;
    const id_imd = 6069;
    axios.post(`${this.env.VUE_APP_URL_BASE}/authz-server/oauth/token?client_id=${this.env.VUE_APP_CLIENT_ID}&client_secret=${this.env.VUE_APP_CLIENT_SECRET}&grant_type=client_credentials`).then((response) => {
      const token = response.data.access_token;
      this.config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-api-key": `${this.env.VUE_APP_X_API_KEY}`,
        },
      };
      axios.get(`${this.env.VUE_APP_URL_BASE}turma/v1/turmas?ano=2021&limit=100&periodo=1&id-unidade=${id_imd}`, this.config).then((response) => {
        this.turmas = [...response.data];

        this.turmas.slice(0,5).forEach((turma, i) => {
          setTimeout(() => {
            this.getDocentes(turma);
          }, i * 500);
        });
        console.log(this.turmas.slice(0,5))
      });
    });

  },
  methods: {
    addTurma(turma){
      this.events.concat(this.turma2event(turma));
    },
    getDocentes(turma) {
      axios.get(`${this.env.VUE_APP_URL_BASE}turma/v1/turmas/${turma['id-turma']}/docentes`, this.config).then((response) => {
        turma.docentes =  [...response.data]
      })
    },
    turma2event(turma) {
      // EXPECTED EVENT RETURNED OBJECT
      // {
      //   "id": 6,
      //     "title": "Meeting",
      //     "start": "2019-01-12T10:30:00",
      //     "end": "2019-01-12T12:30:00"
      // }
      let events = [];

      const horarios_str = turma['descricao-horario'].split('(')[0].split(' ')
      for (let horario in horarios_str){
        let info = {dias: '', horarios: '', turno: horario.match('[aA-zZ]')}
        var [dias, horarios] = horario.split(info.turno)
        info.dias = dias;
        info.horarios = horarios;

        let inicio = moment("2021-08-01 00:00:00 ");
        [...info.dias].forEach((dia) => {
          [...info.horarios].forEach((horario) => {
            let horarios = this.horarios[`${info.turno}${horario}`]
            console.log(horarios)
            let event = {"id": this.events.length, title: `${turma['nome-componente']} - ${turma.docentes.filter((docente) => docente['nome-docente']).map((docentes) => docentes['nome-docente']).join(', ')}}`}
            let start = inicio.add(parseInt(dia)-1, 'days');
            start.hours(horarios.start.hours)
            start.minutes(horarios.start.minutes)
            event.start = start;
            let end = inicio.add(parseInt(dia)-1, 'days');
            end.hours(horarios.end.hours)
            end.minutes(horarios.end.minutes)
            event.end = end;
            events.push(event)
          })
        })
      }






      return events;
    },

  },
};
</script>

<style>
table {
  color: var(--text-color)
}
body {
  background: var(--surface-a);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
