<template>
  <DataTable
    :value="turmas"
    rowGroupMode="subheader"
    groupRowsBy="nome-componente"
    scrollable
    scrollHeight="80vh"
  >
    <Column field="codigo-turma" header="Código" style="width: 2rem"></Column>
    <Column field="capacidade-aluno" header="Capacidade"></Column>
    <Column field="local" header="Local"></Column>
    <Column field="ano" header="Ano"></Column>
    <Column field="periodo" header="Período"></Column>
    <Column field="periodo" header="Período"></Column>
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
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      turmas: {},
    };
  },
  mounted() {
    const env = process.env;
    const id_imd = 6069;
    axios
      .post(
        `${env.VUE_APP_URL_BASE}/authz-server/oauth/token?client_id=${env.VUE_APP_CLIENT_ID}&client_secret=${env.VUE_APP_CLIENT_SECRET}&grant_type=client_credentials`
      )
      .then((response) => {
        const token = response.data.access_token;
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": `${env.VUE_APP_X_API_KEY}`,
          },
        };
        // axios
        //   .get(
        //     `${env.VUE_APP_URL_BASE}docente/v1/docentes`,
        //     config
        //   )
        axios
          .get(
            `${env.VUE_APP_URL_BASE}turma/v1/turmas/57666124/`,
            config
          ).then((response) => {
            console.log(response)
          })
        axios
          .get(
            `${env.VUE_APP_URL_BASE}turma/v1/turmas?ano=2021&limit=100&periodo=1&id-unidade=${id_imd}`,
            config
          )
          .then((response) => {
            this.turmas = response.data;
            console.log(this.turmas[0]);
            axios.get(
              `${env.VUE_APP_URL_BASE}turma/v1/turmas/${this.turmas[0]["id-turma"]}`,
              config
            ).then((response) => {
              console.log(response.data['id-docente'])
            });
          });
      });
    // imd =  requests.get(f'{URL_BASE}/unidade/v1/unidades?sigla=imd',headers=custom_headers).json()[0]
    // id_imd = imd['id-unidade']
    // turmas = requests.get(f'{URL_BASE}/turma/v1/turmas?ano=2020&periodo=1&id-unidade={id_imd}',headers=custom_headers).json()
  },
};
</script>

<style>
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
