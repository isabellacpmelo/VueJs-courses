<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <!-- submit: dispara o evento submit do form e faz um refresh da página  -->
        <!-- action: define o caminho/destino do formulário -->
        <!-- Ao utilizar o prevent, o evento submit não é executado automaticamente -->
        <!-- <form @submit.prevent="enviar($event)" action=""> -->
        <form @reset.prevent="resetar()">
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model.lazy.trim="form.nome"
              />
              <!-- Modificadores embutidos do v-model -->
              <!-- Lazy: o valor do v-model só é modificado quando o input perde o foco -->
              <!-- Trim: responsável por retirar espaços adicionais nas extremidades de uma determinada string-->
              <!-- Number: transforma a string do input em um número, caso seja um valor compatível-->
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input
                type="email"
                class="form-control"
                v-model="form.email"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input
                type="password"
                class="form-control"
                v-model.trim="form.senha"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model.number="form.idade"
              />
              <!-- Não é necessário utilizar o modificador number, pois o type number aceita apenas números no input, porém, no vue 2 mesmo com esse type, o valor ainda é enviado como string, então é necessário utilizar o modificador number no v-model -->
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="form.genero"
                  value="Feminino"
                />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="form.genero"
                  value="Masculino"
                />
                <label class="form-check-label"> Masculino </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Licença:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.licenca"
                  true-value="SIM"
                  false-value="NÃO"
                />
                <label class="form-check-label">Li e aceito os termos</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interesses:</label>
            <div class="col">
              <div class="form-check">
                <input 
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.interesses"
                  value="Javascript"
                />
                <label class="form-check-label"> Javascript </label>
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.interesses"
                  value="VueJs"
                />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.interesses"
                  value="Angular"
                />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.interesses"
                  value="NodeJs"
                />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.telefone"
                v-maska="['(##) ####-####', '(##) #####-####']"
              />
              <small class="text-muted">Formato: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cep"
                v-maska="'#####-###'"
              />
              <small class="text-muted">Formato: 000000-000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cpf"
                v-maska="'###.###.###-##'"
              />
              <small class="text-muted">Formato: 000.000.000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CNPJ:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cnpj"
                v-maska="'##.###.###/####-##'"
              />
              <small class="text-muted">Formato: 000.000.000/0000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cartão de Crédito:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cartaoDeCredito"
                v-maska="'#### #### #### ####'"
              />
              <small class="text-muted">Formato: 000 0000 0000 0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa Veículo:</label>
            <div class="col">
              <input 
                type="text" 
                class="form-control" 
                v-model="form.placaVeiculo"
                v-maska="'AAA-####'"
              />
              <small class="text-muted">Formato: AAA-0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa Veículo Mercosul:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.placaVeiculoMercosul"
                v-maska="'AAA#A##'"
              />
              <small class="text-muted">Formato: AAA0A00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Registro Geral:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.rg"
                v-maska="'#*-X'"
              />
              <small class="text-muted">Formato: Sem Padrão</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input
                v-model="form.data"
                type="date"
                class="form-control"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input
                v-model="form.dataHoraLocal"
                type="datetime-local"
                class="form-control"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input
                v-model="form.mes"
                type="month"
                class="form-control"
                />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input
                v-model="form.semana"
                type="week"
                class="form-control"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input
                v-model="form.hora"
                type="time"
                class="form-control"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input
                v-model="form.cor"
                type="color"
                class="form-color"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input
                v-model="form.alcance"
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input
                v-model="form.escondido"
                type="hidden"
                class="form-control"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input
                type="file"
                class="form-control"
                multiple
                @change="selecionarArquivos($event)"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Descrição:</label>
            <div class="col">
              <textarea
                v-model="form.descricao"
                class="form-control"
                rows="3">
              </textarea>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cursos:</label>
            <div class="col">
              <select v-model="form.curso" class="form-select">
                <option value="" disabled>Selecione...</option>
                <option 
                  v-for="curso in cursos"
                  :key="curso.id"
                  :value="curso.id"
                >
                  {{ curso.id }} - {{ curso.curso }}
                </option>
              </select>
            </div>
            <div class="mb-3 row">
            <label class="col-3 col-form-label">Avaliação:</label>
            <div class="col">
              <input-estrelas />
            </div>
          </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button 
                class="btn btn-secondary"
                type="button"
                @click="resetar()"
              >
                Limpar (btn)
              </button>
              <button 
                class="btn btn-secondary"
                type="reset"
              >
                Limpar (reset)
              </button>
              <button
                class="btn btn-success"
                type="button"
                @click="enviar($event)"
              >
                Enviar (btn)
              </button>
              <button
                class="btn btn-success"
                type="submit"
              >
                Enviar (submit)
              </button>
            </div>
          </div>
        </form>
      </div>

      <div 
        class="col-6 text-white bg-secondary"
        :style="`background-color: ${form.cor} !important`"
      >
        <span class="fs-4">ESTADO DO OBJETO</span>
        <hr />
        <div class="mb-5 row">
          <spam>{{ form }}</spam>
        </div>

        <span class="fs-4">SAÍDA DE DADOS</span>
        <hr />
        <div class="mb-3 row">
          <spam>Nome: {{ form.nome }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>E-mail: {{ form.email }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Senha: {{ form.senha }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Idade: {{ form.idade }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Gênero: {{ form.genero }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Licença:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Interesses:</spam>
          <ul>
            <li v-for="(interesse, index) in form.interesses" :key="index"> 
              {{ index + 1 }} - {{ interesse }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <spam>Telefone: {{ form.telefone }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>CEP: {{ form.cep }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>CPF: {{ form.cpf }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>CNPJ: {{ form.cnpj }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Cartão de Crédito: {{ form.cartaoDeCredito }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Placa Veículo: {{ form.placaVeiculo }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Placa Veículo Mercosul: {{ form.placaVeiculoMercosul }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Registro Geral: {{ form.rg }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>
            Data: {{ form.data }} | {{ $moment(form.data).format('DD/MM/YYYY') }}
          </spam>
        </div>
        <div class="mb-3 row">
          <spam>Data/hora local: {{ form.dataHoraLocal }}</spam>
          <ul>
            <li>{{ $moment(form.dataHoraLocal).format('dddd') }}</li>
            <li>{{ $moment(form.dataHoraLocal).add(10, 'days') }}</li>
            <li>{{ $moment(form.dataHoraLocal).add(1, 'month') }}</li>
            <li>{{ $moment(form.dataHoraLocal).add(2, 'years') }}</li>
            <li>{{ $moment(form.dataHoraLocal).subtract(10, 'days') }}</li>
            <li>{{ $moment(form.dataHoraLocal).subtract(1, 'month') }}</li>
            <li>{{ $moment(form.dataHoraLocal).subtract(2, 'years') }}</li>
            <li>{{ $moment(form.dataHoraLocal).format('LLLL') }}</li>
          </ul>
        </div>
        <div class="mb-3 row">
          <spam>Mês: {{ form.mes }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Semana: {{ form.semana }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Hora: {{ form.hora }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Cor: {{ form.cor }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Valor limite: {{ form.alcance }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Escondido: {{ form.escondido }}</spam>
        </div>
        <div class="mb-3 row">
          <spam>Upload:</spam>
          <ul>
            <li v-for="(file, index) in form.arquivos" :key="index">
              {{ index + 1 }} - {{ file.name }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <spam>Descrição:</spam>
          <!-- <pre>{{ form.descricao }}</pre> -->
          <div style="white-space: pre">{{ form.descricao }}</div>
        </div>
        <div class="mb-3 row">
          <spam>Curso: {{ form.curso }}</spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputEstrelas from '@/components/InputEstrelas.vue';

export default {
  name: 'FormularioVue',
  components: {
    InputEstrelas,
  },
  data: () => {
    return {
      cursos: [
        {
          id: 1,
          curso: 'Banco de Dados Relacionais'
        },
        {
          id: 2,
          curso: 'Desenvolvimento Web Avançado com Vue'
        },
        {
          id: 3,
          curso: 'Desenvolvimento Web Avançado com Laravel'
        },
        {
          id: 4,
          curso: 'Curso Completo do Desenvolvedor NodeJs e MongoDB'
        },
      ],
      form: {},
      formEstadoIncial: {
        nome: 'Joaninha Cristálida',
        email: 'joa_cristalida@tester.com',
        senha: '',
        idade: '',
        licenca: 'SIM',
        interesses: ['VueJs'],
        genero: 'Feminino',
        telefone: '',
        cep: '',
        cpf: '',
        cnpj: '',
        cartaoDeCredito: '',
        placaVeiculo: '',
        placaVeiculoMercosul: '',
        rg: '',
        data: '',
        dataHoraLocal: '',
        mes: '',
        semana: '',
        hora: '',
        cor: '#6c757d',
        alcance: 0,
        escondido: 'Esse input está escondido',
        arquivos: {},
        descricao: '',
        curso: '',
      }
    }
  },
  created() {
    this.form = Object.assign({}, this.formEstadoIncial)
  },
  methods: {
    selecionarArquivos(event) {
      this.form.arquivos = event.target.files
    },
    enviar(event) {
      console.log(event)
      // console.log(this.form)
      
      const formEnvio = Object.assign({}, this.form)
      console.log(formEnvio)
      
      // Uma requisição HTTP para o backend da aplicação
      // Promise que vai nos permitir tomar ações se a requisição deu certo ou errado
    },
    resetar() {
      this.form = Object.assign({}, this.formEstadoIncial)
    }
  }
}
</script>
