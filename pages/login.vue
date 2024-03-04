<script setup lang="ts">
console.log(123);
</script>

<template>
  <div class="loginContainer">
    <div class="loginContainer__form">
      <h1 class="loginContainer__title">ログイン画面</h1>
      <v-sheet class="mx-auto" width="300">
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form ref="form">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="メールアドレス"
              required
            />

            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="パスワード"
              required
              persistent-hint
              type="input"
            />

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="次回からログインを維持したままにする"
              required
            />

            <div class="d-flex flex-column">
              <v-btn class="mt-4" color="success" block @click="validate">
                ログイン
              </v-btn>
              <v-btn class="mt-4" color="failed" block @click="validate">
                登録
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-sheet>
    </div>
  </div>
</template>
