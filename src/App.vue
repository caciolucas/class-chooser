<template>
  <h1>SIGAA Class Chooser</h1>
  <FullCalendar :events="events" :options="options" style="width: 75%; margin:auto"/>
  <div class="p-grid">
    <div class="p-col-12">
      <DataTable
        :globalFilterFields="['codigo-turma','docentes','descricao-horario','codigo-componente','nome-componente']"
        :value="turmas"
        v-model:filters="filters"
        class="p-datatable-sm"
        groupRowsBy="nome-componente"
        rowGroupMode="subheader"
        scrollHeight="45vh"
        :scrollable="true"
        >
        <template #header>

          <div class="p-d-flex p-jc-between p-ai-center">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Busque aqui" />
            </span>
            <Button label="Todos os docentes" class="p-button-primary" icon="fas fa-users" @click="confirmGetAllDocentes" :loading="loadingDocentes"></Button>
          </div>
        </template>

        <Column header="Cod" style="width:100px" headerStyle="width:100px" bodyStyle="width:100px">
          <template #body="slotProps">
            <div style="width: 3rem">{{ slotProps.data['codigo-turma'] }}</div>
          </template>
        </Column>
        <Column header="Docentes">
          <template #body="slotProps">
            <span v-if="slotProps.data.docentes">
              <Chip v-for="docente in slotProps.data.docentes.filter((docente) => docente['nome-docente']).map((docentes) => docentes['nome-docente'])" :key="docente['id-docente']" :label="docente.split(' ').slice(0,2).join(' ')" icon="fas fa-chalkboard-teacher" />
            </span>
            <span v-else> <Chip label="Carregue os docentes" icon="fas fa-spinner" /></span>
          </template>
        </Column>
        <Column field="capacidade-aluno" header="Capacidade"></Column>
        <Column field="descricao-horario" header="Horário">
          <template #body="slotProps">
          <span v-if="slotProps.data['descricao-horario']">
            {{ (slotProps.data['descricao-horario']).split('(')[0] }}
          </span>
            <span v-else>Sem horários</span>
          </template>
        </Column>
        <Column header="Periodo">
          <template #body="slotProps">
            {{ slotProps.data.ano }}.{{ slotProps.data.periodo }}
          </template>
        </Column>
        <Column headerStyle="width: 2rem">
          <template #body="slotProps">
            <Button v-if="!slotProps.data.docentes"
                    class="p-button-primary p-button-sm p-button-rounded" icon="fas fa-user-tie" label="Docentes"
                    @click="getDocentes(slotProps.data)"></Button>
            <Button v-if="!slotProps.data.events_id && slotProps.data.docentes" :disabled="!slotProps.data['descricao-horario']"
                    class="p-button-success p-button-sm p-button-rounded" icon="pi pi-plus" label="Adicionar"
                    @click="addTurma(slotProps.data)"></Button>
            <Button v-if="slotProps.data.events_id" class="p-button-danger p-button-sm p-button-rounded" icon="pi pi-times"
                    label="Remover" @click="removeTurma(slotProps.data)"></Button>
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
    </div>
  </div>


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
<ConfirmPopup></ConfirmPopup>
</template>


<script>
import "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {FilterMatchMode} from 'primevue/api';

import axios from "axios";
import moment from "moment";

export default {
  name: "App",
  components: {},
  data() {
    return {
      loadingDocentes: false,
      colors: {
        M: '#5A7D7C',
        T: '#A0C1D1',
        N: '#DADFF7'
      },
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
        editable: false,
        height: "50vh",
        headerToolbar: {
          start: '',
          center: '',
          end: ''
        },
        dayHeaderFormat: {
          weekday: 'short'
        },
        slotLabelFormat: {
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
          "start": {"hours": 7, "minutes": 0},
          "end": {"hours": 7, "minutes": 50}
        },
        "M2": {
          "start": {"hours": 7, "minutes": 50},
          "end": {"hours": 8, "minutes": 40}
        },
        "M3": {
          "start": {"hours": 8, "minutes": 55},
          "end": {"hours": 9, "minutes": 45}
        },
        "M4": {
          "start": {"hours": 9, "minutes": 45},
          "end": {"hours": 10, "minutes": 35}
        },
        "M5": {
          "start": {"hours": 10, "minutes": 50},
          "end": {"hours": 11, "minutes": 40}
        },
        "M6": {
          "start": {"hours": 11, "minutes": 40},
          "end": {"hours": 12, "minutes": 30}
        },
        "T1": {
          "start": {"hours": 13, "minutes": 0},
          "end": {"hours": 13, "minutes": 50}
        },
        "T2": {
          "start": {"hours": 13, "minutes": 50},
          "end": {"hours": 14, "minutes": 40}
        },
        "T3": {
          "start": {"hours": 14, "minutes": 55},
          "end": {"hours": 15, "minutes": 45}
        },
        "T4": {
          "start": {"hours": 15, "minutes": 45},
          "end": {"hours": 16, "minutes": 35}
        },
        "T5": {
          "start": {"hours": 16, "minutes": 50},
          "end": {"hours": 17, "minutes": 40}
        },
        "T6": {
          "start": {"hours": 17, "minutes": 40},
          "end": {"hours": 18, "minutes": 30}
        },
        "N1": {
          "start": {"hours": 18, "minutes": 45},
          "end": {"hours": 19, "minutes": 35}
        },
        "N2": {
          "start": {"hours": 19, "minutes": 35},
          "end": {"hours": 20, "minutes": 25}
        },
        "N3": {
          "start": {"hours": 20, "minutes": 35},
          "end": {"hours": 21, "minutes": 25}
        },
        "N4": {
          "start": {"hours": 21, "minutes": 25},
          "end": {"hours": 22, "minutes": 15}
        }
      },
      filters: {'global': {value: null, matchMode: FilterMatchMode.CONTAINS},},
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
      });
    });

  },
  methods: {
    confirmGetAllDocentes() {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Os docentes serão recuperados um a um, quer prosseguir?',
        icon: 'pi pi-exclamation-triangle',
        acceptClass: 'p-button-success',
        rejectClass: 'p-button-danger p-button-oulined',
        accept: () => {
          this.loadingDocentes = true;
          this.getAllDocentes();
        },
        reject: () => {
          //callback to execute when user rejects the action
        }
      });
    },
    getAllDocentes(){
      this.turmas.forEach((turma, i) => {
        setTimeout(() => {
          console.log(i)
          this.getDocentes(turma);
          if(i === this.turmas.length - 1){
            this.loadingDocentes = false;
          }
        }, i * 500);
      });
    },
    removeTurma(turma) {
      this.events = this.events.filter((evento) => !turma.events_id.includes(evento.id))
      turma.events_id = null;
    },
    addTurma(turma) {
      const horarios = this.turma2event(turma)
      this.events = this.events.concat(horarios);
    },
    getDocentes(turma) {
      axios.get(`${this.env.VUE_APP_URL_BASE}turma/v1/turmas/${turma['id-turma']}/docentes`, this.config).then((response) => {
        if (response.data.length){
          turma.docentes = [...response.data]
        }
        else {
          turma.docentes = [{'nome-docente': 'A definir...'}]
        }
      })
    },
    turma2event(turma) {
      let events = [];
      let index = this.events.length
      const horarios_array = turma['descricao-horario'].split('(')[0].split(' ').filter((horario) => horario)
      horarios_array.forEach((horario_str) => {
        let info = {dias: '', horarios: '', turno: horario_str.match('[aA-zZ]')}
        var [dias, horarios] = horario_str.split(info.turno)
        info.dias = dias;
        info.horarios = horarios;

        let base = moment("20210801000000", "YYYYMMDDHHmmSS", true);

        [...info.dias].forEach((dia) => {
          [...info.horarios].forEach((horario) => {

            let horarios = this.horarios[`${info.turno}${horario}`]

            let docentes = turma.docentes.filter((docente) => docente['nome-docente']).map((docentes) => docentes['nome-docente']).join(', ');
            let evento = {
              "id": index,
              "title": `${turma['codigo-componente']} - ${docentes}`,
              backgroundColor: this.colors[info.turno]
            }

            let start = base.clone().add(parseInt(dia) - 1, 'days');
            start = start.set(horarios.start)
            evento.start = start.format("YYYY-MM-DDTHH:mm:SS");

            let end = base.clone().add(parseInt(dia) - 1, 'days');
            end.set(horarios.end)
            evento.end = end.format("YYYY-MM-DDTHH:mm:SS");

            events.push(evento)

            index += 1
          })
        })
      })
      turma.events_id = events.map((evento) => evento.id)
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
h1, h2 {
  color: var(--text-color);
  font-family: var(--font-family);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
