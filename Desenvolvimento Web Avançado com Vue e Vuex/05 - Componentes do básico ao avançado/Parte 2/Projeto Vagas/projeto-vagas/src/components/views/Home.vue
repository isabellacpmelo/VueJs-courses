<!-- @format -->

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga />
      </div>
    </div>

    <lista-vagas :vagas="vagas" />

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas abertas"
          indicador="25"
          bg="bg-dark"
          color="text-white" />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white" />
      </div>
      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark" />
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "../comuns/ListaVagas.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";

export default {
  name: "Home",
  components: {
    Indicador,
    ListaVagas,
    PesquisarVaga,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: 0,
    // vagas: [
    //   {
    //     titulo: "Analista Programador PHP Pleno",
    //     descricao:
    //       "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
    //     salario: 6000,
    //     modalidade: "Home Office",
    //     tipo: "PJ",
    //     publicacao: "2021-10-10",
    //   },
    //   {
    //     titulo: "Programador JavaScript Angular",
    //     descricao:
    //       "Profissional com conhecimentos avançados em JavaScript e Angular.",
    //     salario: 5000,
    //     modalidade: "Presencial",
    //     tipo: "CLT",
    //     publicacao: "2021-10-07",
    //   },
    //   {
    //     titulo: "Programador JavaScript Vue",
    //     descricao:
    //       "Profissional com conhecimentos avançados em JavaScript e Vue.",
    //     salario: 5000,
    //     modalidade: "Home Office",
    //     tipo: "CLT",
    //     publicacao: "2021-10-06",
    //   },
    //   {
    //     titulo: "Analista de Banco de Dados Sênior",
    //     descricao:
    //       "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
    //     salario: 9000,
    //     modalidade: "Presencial",
    //     tipo: "PJ",
    //     publicacao: "2021-10-06",
    //   },
    //   {
    //     titulo: "Programador Web Júnior",
    //     descricao:
    //       "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
    //     salario: 3000,
    //     modalidade: "Presencial",
    //     tipo: "CLT",
    //     publicacao: "2021-10-05",
    //   },
    // ],
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000); //a cada 1s
  },
  // Se não existisse o keep alive, seria mounted()
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      //true ou false: O método filter cria um novo array com todos os elementos que passaram no teste implementado na função.
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
};
</script>

<style scoped></style>
