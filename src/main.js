import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'primevue/resources/themes/arya-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'     //icons
import 'primeflex/primeflex.css';

// import '@fortawesome/fontawesome-free'
// import '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/vue-fontawesome'

import '@fortawesome/fontawesome-free/css/all.css';

import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';
import Toolbar from 'primevue/toolbar';
import InputText from 'primevue/inputtext';
import Fieldset from 'primevue/fieldset';
import FullCalendar from 'primevue/fullcalendar';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Chip from 'primevue/chip';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmPopup from 'primevue/confirmpopup';

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true,
    locale: {
        startsWith: 'Começa com',
        contains: 'Contém',
        notContains: 'Não contém',
        endsWith: 'Termina com',
        equals: 'Igual à',
        notEquals: 'Diferente de',
        noFilter: 'Sem filtro',
        lt: 'Menor que',
        lte: 'Menor ou igual à',
        gt: 'Maior que',
        gte: 'Maior ou igual à',
        dateIs: 'Data é',
        dateIsNot: 'Data não é',
        dateBefore: 'Data é antes',
        dateAfter: 'Data é depois',
        clear: 'Limpar',
        apply: 'Aplicar',
        matchAll: 'Corresponde à todos',
        matchAny: 'Corresponde à qualquer',
        addRule: 'Adicionar regra',
        removeRule: 'Remover regra',
        accept: 'Sim',
        reject: 'Não',
        choose: 'Escolher',
        upload: 'Carregar',
        cancel: 'Cancelar',
        dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        dayNamesMin: ["D","S","T","Q","Q","S","S"],
        monthNames: ["Janeiro","Fevereiro","Março","Abri","Maior","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: 'Hoje',
        weekHeader: 'Sem',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Fraco',
        medium: 'Médio',
        strong: 'Forte',
        passwordPrompt: 'Insira uma senha',
        emptyFilterMessage: 'Nenhum resultado encontrado',
        emptyMessage: 'Sem opções disponíveis'
    }
})
app.use(VueAxios, axios) // 👈
app.use(ToastService) // 
app.use(ConfirmationService);


app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);
app.component('Timeline', Timeline);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Dialog', Dialog);
app.component('Toolbar', Toolbar);
app.component('InputText', InputText);
app.component('Fieldset', Fieldset);
app.component('FullCalendar', FullCalendar);
app.component('Toast', Toast);
app.component('Chip', Chip);
app.component('ConfirmPopup', ConfirmPopup)


app.mount('#app')