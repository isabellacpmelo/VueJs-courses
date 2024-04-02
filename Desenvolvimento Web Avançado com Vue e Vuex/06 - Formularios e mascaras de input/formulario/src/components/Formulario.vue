<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <form>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input type="text" class="form-control" v-model.lazy.trim="form.nome" />
              <!-- Modificadores embutidos do v-model -->
              <!-- Lazy: o valor do v-model só é modificado quando o input perde o foco -->
              <!-- Trim: responsável por retirar espaços adicionais nas extremidades de uma determinada string-->
              <!-- Number: transforma a string do input em um número, caso seja um valor compatível-->
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input type="email" class="form-control" v-model="form.email" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input type="password" class="form-control" v-model.trim="form.senha" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input type="number" class="form-control" v-model.number="form.idade" />
              <!-- Não é necessário utilizar o modificador number, pois o type number aceita apenas números no input, porém, no vue 2 mesmo com esse type, o valor ainda é enviado como string, então é necessário utilizar o modificador number no v-model -->
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="form.genero" value="Feminino" />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" v-model="form.genero" value="Masculino" />
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
                <input class="form-check-input" type="checkbox" v-model="form.interesses" value="Javascript"/>
                <label class="form-check-label"> Javascript </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.interesses" value="VueJs" />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.interesses" value="Angular" />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.interesses" value="NodeJs" />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <input type="text" class="form-control" v-model="form.telefone" v-maska="['(##) ####-####', '(##) #####-####']" />
              <small class="text-muted">Formato: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <input type="text" class="form-control" v-model="form.cep" v-maska="'#####-###'" />
              <small class="text-muted">Formato: 000000-000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <input type="text" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'" />
              <small class="text-muted">Formato: 000.000.000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CNPJ:</label>
            <div class="col">
              <input type="text" class="form-control" v-model="form.cnpj" v-maska="'##.###.###/####-##'" />
              <small class="text-muted">Formato: 000.000.000/0000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cartão de Crédito:</label>
            <div class="col">
              <input type="tel" class="form-control" v-model="form.cartaoDeCredito" v-maska="'#### #### #### ####'" />
              <small class="text-muted">Formato: 000 0000 0000 0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input type="datetime-local" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input type="month" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input type="week" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input type="time" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input type="color" class="form-color" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input type="range" class="form-range" min="0" max="100" step="1" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input type="hidden" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input type="file" class="form-control" />
            </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Limpar</button>
              <button class="btn btn-success" type="button">Enviar (btn)</button>
              <button class="btn btn-success" type="submit">Enviar (submit)</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-6 text-white bg-secondary">
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
          <spam>Data:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Data/hora local:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Mês:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Semana:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Hora:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Cor:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Valor limite:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Escondido:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Upload:</spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioVue',
  data: () => {
    return {
      form: {
        nome: '',
        email: '',
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
      }
    }
  }
}
</script>
