import Calculadora from '@/components/Calculadora.vue';
<template>
  <div class="calculadora">
    <div class="calculadora__pantalla"><p>{{pantalla || 0}}</p></div>
    <div class="botones">
        <button @click="limpiar" class="botones__items">C</button>
        <button @click="negativo" class="botones__items">+/-</button>
        <button class="botones__items">%</button>
        <button @click="division" class="botones__items">/</button>

        <button @click="numero('7')" class="botones__items">7</button>
        <button @click="numero('8')" class="botones__items">8</button>
        <button @click="numero('9')" class="botones__items">9</button>
        <button @click="multiplicacion" class="botones__items">x</button>

        <button @click="numero('4')" class="botones__items">4</button>
        <button @click="numero('5')" class="botones__items">5</button>
        <button @click="numero('6')" class="botones__items">6</button>
        <button @click="resta" class="botones__items">-</button>

        <button @click="numero('3')" class="botones__items">3</button>
        <button @click="numero('2')" class="botones__items">2</button>
        <button @click="numero('1')" class="botones__items">1</button>
        <button @click="suma" class="botones__items">+</button>

        <button @click="numero('0')" class="botones__items">0</button>
        <button @click="punto" class="botones__items">.</button>
        <button @click="igual" class="botones__items igual">=</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()

    const pantalla = computed(()=>{
      return store.state.pantallas
    })
    const limpiar = () =>{
      store.dispatch('limpiar')
    }
    const negativo = () =>{
      store.dispatch('negativa')
    }
    const numero = (num) =>{
      store.dispatch('agregarNumero',num)
    }
    const division = (()=>{
      store.dispatch('division')
    })
    const multiplicacion = (()=>{
      store.dispatch('multiplicacion')
    })
    const resta = (()=>{
      store.dispatch('resta')
    })
    const suma = (()=>{
      store.dispatch('suma')
    })
    const igual = (()=>{
      store.dispatch('igual')
    })
    return{
      pantalla,
      limpiar,
      negativo,
      numero,
      division,
      multiplicacion,
      resta,
      suma,
      igual
    }
  }
}
</script>

<style lang="scss" scoped>
.calculadora{
    background: linear-gradient(100deg, rgba(92, 81, 81, 0.7), rgba(92, 78, 78, 0.7));
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    &__pantalla{
        background:linear-gradient(60deg, rgba(0,0,0.3),rgb(202, 42, 50));
        width: 50%;
        text-align: center;
        font-size: 2rem;
        color: white;
    }
    .botones{
      margin-top: 3%;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fit,24.5%);
        gap: .05rem;

        &__items{
        height: 4rem;
        font-weight: bolder;
        border:  1px solid seagreen;
        background: linear-gradient(60deg, hsla(0, 0%, 0%, 0.9), rgba(0,0,0,.9));
        color: white;
        }
        .igual{
          grid-column:  span 2;
        }
    }
}
</style>