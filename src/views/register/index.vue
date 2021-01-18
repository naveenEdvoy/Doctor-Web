<template>
  <div class="w-full bg-blue-200 h-screen main-div">
    <div class="w-1/2 center-div rounded-xl flex">
      <section class="h-full bg-purple-500 w-1/3 rounded-l-xl flex">
        <div class="m-auto">
          <h2 class="text-white text-3xl">DocAssitant</h2>
          <p class="text-white text-2xl my-4">
            Already have an <br />
            Account?
          </p>
          <button class="btn text-sm pl-6 pr-6 pb-3 pt-3" @click="openLogin">
            Sign In
          </button>
        </div>
      </section>
      <section class="w-2/3 h-full">
        <div class="h-full">
          <form action="#" class="form m-auto h-full">
            <p class="h3 text-center mb-4">Sign Up</p>
            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                required
              />
              <label for="email" class="form__label">Email address</label>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Password"
                id="password"
                required
              />
              <label for="password" class="form__label">Password</label>
            </div>
            <div>
              <button
                type="submit"
                class="btn text-sm pl-6 pr-6 pb-3 pt-3 border-blue-200 border-2"
              >
                Sign UP
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Register extends Vue {
  public openLogin() {
    this.$router.push('/login')
  }
}
</script>
<style lang="scss">
.main-div {
  overflow: hidden;
}
.center-div {
  margin: 0;
  position: absolute;
  background: whitesmoke;
  height: 420px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.btn {
  margin-top: 7px;
  border-radius: 1.5rem;
  background-color: white;
}
.form {
  text-align: left;
  &__group:not(:last-child) {
    // margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    border-color: purple;
  }

  &__input {
    font-size: 1rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 0 1rem;
    border-radius: 2px;
    background-color: whitesmoke;
    border: 2px;
    border-bottom: 2px solid transparent;
    width: 60%;
    display: block;
    transition: all 0.3s;
    border-color: gray;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem whitesmoke;
      border-bottom: 2px solid purple;
    }

    &:focus:invalid {
      border-bottom: 2px solid red;
    }

    &::-webkit-input-placeholder {
      color: gray;
    }
  }

  &__label {
    font-size: 0.8rem;
    text-align: left;
    transition: all 0.3s;
    color: purple;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}
</style>
