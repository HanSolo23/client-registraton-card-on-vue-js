<template>
  <div class="form">
    <img alt="Vue logo" v-bind:src="viewImage()" />
    <div class="form__title">{{ msg }}</div>
    <form v-on:submit="someAction()">
      <div class="menu__unit__input">
        <div class="menu__unit__title">{{ formsTitle.client }}</div>
        <div class="menu__item__input">
          <label for="last__name">{{ formsName.lastName }}</label>
          <input
            id="last__name" 
            type="text" 
            v-model.trim="$v.textRequiredForms.lastName.$model"
            @blur="$v.textRequiredForms.lastName.$touch()"/>
          <div class="error" v-if="$v.textRequiredForms.lastName.$error">
            <template v-if="!$v.textRequiredForms.lastName.maxLength">
              {{ validationErrors.maxLength }} {{ $v.textRequiredForms.lastName.$params.maxLength.max }} {{ validationErrors.word }}
            </template>
            <template v-else-if="!$v.textRequiredForms.lastName.alpha">
              {{ validationErrors.onlyLetters }}
            </template>
            <template v-else>
              {{ validationErrors.requiredInput }}
            </template>
          </div>
        </div>
        <div class="menu__item__input">
          <label for="first__name">{{ formsName.firstName }}</label>
          <input 
            id="first__name" 
            type="text" 
            v-model.trim="$v.textRequiredForms.firstName.$model"
            @blur="$v.textRequiredForms.firstName.$touch()"/>
          <div class="error" v-if="$v.textRequiredForms.firstName.$error">
            <template v-if="!$v.textRequiredForms.firstName.maxLength">
              {{ validationErrors.maxLength }} {{ $v.textRequiredForms.firstName.$params.maxLength.max }} {{ validationErrors.word }}
            </template>
            <template v-else-if="!$v.textRequiredForms.firstName.alpha">
             {{ validationErrors.onlyLetters }}
            </template>
            <template v-else>
              {{ validationErrors.requiredInput }}
            </template>
          </div>
        </div>
        <div class="menu__item__input">
          <label for="middle__name">{{ formsName.middleName }}</label>
          <input 
            id="middle__name" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.middleName.$model"
            @blur="$v.textNonrequiredForms.middleName.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.middleName.$error">
            <template v-if="!$v.textNonrequiredForms.middleName.maxLength">
              {{ validationErrors.maxLength }} {{ $v.textNonrequiredForms.middleName.$params.maxLength.max }} {{ validationErrors.word }}
            </template>
            <template v-else-if="!$v.textNonrequiredForms.middleName.alpha">
              {{ validationErrors.onlyLetters }}
            </template>
          </div>
        </div>
        <div class="menu__item__input">
          <label for="birthday">{{ formsName.birthday }}</label>
          <input 
            id="birthday" 
            type="text" 
            v-model.trim="$v.numericRequiredForms.birthday.$model"
            @blur="$v.numericRequiredForms.birthday.$touch()"
            />
          <div class="error" v-if="$v.numericRequiredForms.birthday.$error">
              {{ validationErrors.dateFormat }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="phone__number">{{ formsName.phoneNumber }}</label>
          <input
            id="phone__number" 
            type="text"
            v-model.trim="$v.numericRequiredForms.phoneNumber.$model"
            @blur="$v.numericRequiredForms.phoneNumber.$touch()"
            />
          <div class="error" v-if="$v.numericRequiredForms.phoneNumber.$error">
            <template v-if="!$v.numericRequiredForms.phoneNumber.maxLength">
              {{ validationErrors.maxLength }} {{ $v.numericRequiredForms.phoneNumber.$params.maxLength.max }} {{ validationErrors.word }}
            </template>
            <template v-else-if="!$v.numericRequiredForms.phoneNumber.number">
              {{ validationErrors.onlyNumbersForPhone }}
            </template>
            <template v-else>
              {{ validationErrors.requiredInput }}
            </template>
          </div>
        </div>
        <div class="menu__item__input">
          <label for="gender">{{ formsName.gender }}</label>
          <input 
            id="gender" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.gender.$model"
            @blur="$v.textNonrequiredForms.gender.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.gender.$error">
              {{ validationErrors.onlyLetters }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="client__group">{{ formsName.clientGroup }}</label>
          <select class="select__multiple" name="select__multiple" id="client__group" size="3" required multiple v-multipleWithoutCtrl>
            <option 
              value="select__multiple" 
              v-for="(group, index) in clientGroup" 
              :key="index">
              {{ group.text }}
            </option>
          </select>
          <div class="error"></div>
        </div>
        <div class="menu__item__input">
          <label for="doctor">{{ formsName.doctor }}</label>
          <select class="select__standart" name="select__standart" id="doctor">
            <option 
              value="select__standart" 
              v-for="(doctor, index) in doctors" 
              :key="index">
              {{ doctor.text }}
            </option>
          </select>
          <div class="error"></div>
        </div>
        <div class="menu__item__checkbox">
          <input id="sms" type="checkbox" /> {{ formsName.sms }}
        </div>
      </div>
      <div class="menu__unit__input">
        <div class="menu__unit__title">{{ formsTitle.address }}</div>
        <div class="menu__item__input">
          <label for="postcode">{{ formsName.postcode }}</label>
          <input 
            id="postcode" 
            type="text" 
            v-model.trim="$v.numericNonrequiredForms.postcode.$model"
            @blur="$v.numericNonrequiredForms.postcode.$touch()"/>
          <div class="error" v-if="$v.numericNonrequiredForms.postcode.$error">
              {{ validationErrors.onlyNumbers }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="country">{{ formsName.country }}</label>
          <input 
            id="country" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.country.$model"
            @blur="$v.textNonrequiredForms.country.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.country.$error">
              {{ validationErrors.onlyLetters }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="region">{{ formsName.region }}</label>
          <input 
            id="region" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.region.$model"
            @blur="$v.textNonrequiredForms.region.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.region.$error">
              {{ validationErrors.onlyLetters }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="city">{{ formsName.city }}</label>
          <input 
            id="city" 
            type="text" 
            v-model.trim="$v.textRequiredForms.city.$model"
            @blur="$v.textRequiredForms.city.$touch()"/>
          <div class="error" v-if="$v.textRequiredForms.city.$error">
            <template v-if="!$v.textRequiredForms.city.maxLength">
              {{ validationErrors.maxLength }} {{ $v.textRequiredForms.city.$params.maxLength.max }} {{ validationErrors.word }}
            </template>
            <template v-else-if="!$v.textRequiredForms.city.alpha">
              {{ validationErrors.onlyLetters }}
            </template>
            <template v-else>
              {{ validationErrors.requiredInput }}
            </template>
          </div>  
        </div>
        <div class="menu__item__input">
          <label for="street">{{ formsName.street }}</label>
          <input 
            id="street" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.street.$model"
            @blur="$v.textNonrequiredForms.street.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.street.$error">
              {{ validationErrors.onlyLetters }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="house">{{ formsName.house }}</label>
          <input 
            id="house" 
            type="text" 
            v-model.trim="$v.numericNonrequiredForms.house.$model"
            @blur="$v.numericNonrequiredForms.house.$touch()"/>
          <div class="error" v-if="$v.numericNonrequiredForms.house.$error">
              {{ validationErrors.onlyNumbers }}
          </div>
        </div>
      </div>
      <div class="menu__unit__input">
        <div class="menu__unit__title">
          {{ formsTitle.document }}
        </div>
        <div class="menu__item__input">
          <label for="document__type">{{ formsName.documentType }}</label>
          <select class="select__standart" name="select__standart" id="document__type" required selected>
            <option 
              value="select__standart" 
              v-for="(document, index) in documents" 
              :key="index">
              {{ document.text }}
            </option>
          </select>
          <div class="error"></div>
        </div>
        <div class="menu__item__input">
          <label for="series">{{ formsName.series }}</label>
          <input 
            id="series" 
            type="text" 
            v-model.trim="$v.numericNonrequiredForms.series.$model"
            @blur="$v.numericNonrequiredForms.series.$touch()"/>
          <div class="error" v-if="$v.numericNonrequiredForms.series.$error">
              {{ validationErrors.onlyNumbers }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="number">{{ formsName.number }}</label>
          <input 
            id="number" 
            type="text" 
            v-model.trim="$v.numericNonrequiredForms.number.$model"
            @blur="$v.numericNonrequiredForms.number.$touch()"/>
          <div class="error" v-if="$v.numericNonrequiredForms.number.$error">
              {{ validationErrors.onlyNumbers }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="issued__by">{{ formsName.issuedBy }}</label>
          <input 
            id="issued__by" 
            type="text" 
            v-model.trim="$v.textNonrequiredForms.issuedBy.$model"
            @blur="$v.textNonrequiredForms.issuedBy.$touch()"/>
          <div class="error" v-if="$v.textNonrequiredForms.issuedBy.$error">
              {{ validationErrors.onlyLetters }}
          </div>
        </div>
        <div class="menu__item__input">
          <label for="date__of__issue">{{ formsName.dateOfIssue }}</label>
          <input 
            id="date__of__issue" 
            type="text" 
            v-model.trim="$v.numericRequiredForms.dateOfIssue.$model"
            @blur="$v.numericRequiredForms.dateOfIssue.$touch()"
            />
          <div class="error" v-if="$v.numericRequiredForms.dateOfIssue.$error">
              {{ validationErrors.dateFormat }}
          </div>
        </div>
        <div class="submit">
          <button type="submit" class="submit__button" :disabled="$v.$invalid">Отправить</button>
          <div class="attention">* - ПОЛЯ ОБЯЗАТЕЛЬНЫЕ ДЛЯ ЗАПОЛНЕНИЯ</div>
        </div>
      </div>
    </form>
    
  </div>
</template>

<script>
import { required, maxLength, helpers, numeric } from "vuelidate/lib/validators";
import moment from 'moment';

// This function removes hold ctrl when select element in multiple selector.
function onSelect(element) {
  element.preventDefault();
  const select = element.currentTarget;
  select.focus();
  if (element.target.tagName === 'OPTION') {
    element.target.selected = !element.target.selected;
    select.dispatchEvent(new Event('change'));
  }
}

const text = helpers.regex('text', /^[а-яё,a-zA-Z, " "]*$/i);
const phone = helpers.regex('phone', /^((7)+([0-9]){10})$/);
const index = helpers.regex('index', /^[0-9, " "]*$/);

export default {
  name: "ClientForm",
  props: {
    msg: String,
    
  },
  data() {
    return {
      image: "logo",
      // Information for forms
      formsTitle: {
        client: "Клиент:",
        address: "Адрес проживания:",
        document: "Сведения о документе, удостоверяющем личность:",
      },
      formsName: {
        lastName: "Фамилия*:",
        firstName: "Имя*:",
        middleName: "Отчество:",
        birthday: "Дата рождения*:",
        phoneNumber: "Номер телефона*:",
        gender: "Пол:",
        clientGroup: "Группа клиентов*:",
        doctor: "Лечащий врач:",
        sms: "Не отправлять СМС",
        postcode: "Индекс:",
        country: "Страна:",
        region: "Область:",
        city: "Город*:",
        street: "Улица:",
        house: "Дом:",
        documentType: "Тип документа*:",
        series: "Серия:",
        number: "Номер:",
        issuedBy: "Кем выдан:",
        dateOfIssue: "Дата выдачи*:",
      },
      validationErrors: {
        maxLength: "Длина не должна превышать",
        word: "символов.",
        onlyLetters: "Поле должно содержать только буквы.",
        onlyNumbers: "Поле должно содержать только цифры.",
        onlyNumbersForPhone: "Номер должен содержать только цифры и начинаться с 7.",
        requiredInput: "Поле обязательно для заполнения.",
        dateFormat: "Дата должна быть в формате ДД.ММ.ГГГГ.",
      },
      clientGroup: [
        { text: "VIP" },
        { text: "Проблемные" },
        { text: "ОМС" }
      ],
      doctors: [
        { text: "Иванов" },
        { text: "Захаров" },
        { text: "Чернышева" }
      ],
      documents: [
        { text: "Паспорт" },
        { text: "Свидетельство о рождении" },
        { text: "Вод.удостоверение" }
      ],
      // Input data for validation
      textRequiredForms: {
        lastName: null,
        firstName: null,
        city: null
      },
      numericRequiredForms: {
        birthday: null,
        phoneNumber: null,
        dateOfIssue: null
      },
      textNonrequiredForms: {
        middleName: null,
        gender: null,
        country: null,
        region: null,
        street: null,
        issuedBy: null
      },
      numericNonrequiredForms: {
        postcode: null,
        house: null,
        series: null,
        number: null
      },
    };
  },
  validations: {
    textRequiredForms: {
      lastName: {
        required,
        maxLength: maxLength(20),
        alpha: text
      },
      firstName: {
        required,
        maxLength: maxLength(20),
        alpha: text
      },
      city: {
        required,
        maxLength: maxLength(20),
        alpha: text
      }
    },
    numericRequiredForms: {
      birthday: {
        required,
        validDate: val => moment(val, "DD.MM.YYYY", true).isValid(),
      },
      phoneNumber: {
        required,
        maxLength: maxLength(11),
        number: phone
      },
       dateOfIssue: {
        required,
        validDate: val => moment(val, "DD.MM.YYYY", true).isValid(),
       }
    },
    textNonrequiredForms: {
      middleName: {
        maxLength: maxLength(20),
        alpha: text
      },
      gender: {
        alpha: text
      },
      country: {
        alpha: text
      },
      region: {
        alpha: text
      },
      street: {
        alpha: text
      },
      issuedBy: {
        alpha: text
      },
    },
    numericNonrequiredForms: {
      postcode: {
        numeral: index
      },
      house: {
        numeral: numeric
      },
      series: {
        numeral: numeric
      },
      number: {
        numeral: numeric
      }
    }
  },
  directives: {
    multipleWithoutCtrl: {
      bind: el => el.addEventListener('mousedown', onSelect),
      unbind: el => el.removeEventListener('mousedown', onSelect),
    }
  },
  methods: {
    viewImage() {
      let imageName = this.image;
      return require(`../assets/${imageName}.png`);
    },
    someAction() {
      alert("Клиент зарегистрирован!")
    }
  },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Nunito Sans";
  src: url('~@/assets/fonts/NunitoSans-Regular.ttf') format('ttf'),
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  img {
    width: 17.19vw;
    height: 7.8vw;
  }
  .form__title {
    font-size: 1.5vw;
  }
  form {
    display: flex;
    flex-direction: row;
    margin-top: 2vw;
  }
  .menu__unit__input {
    margin-right: 2vw;
    width: 30vw;
    .menu__unit__title {
      font-size: 1.1vw;
      margin-bottom: 1vw;
      font-weight: 600; 
    }
    .menu__item__checkbox {
      font-size: 0.8vw;
      font-weight: 600;
      input {
        width: 1vw;
        height: 1vw;
      }
    }
    .submit {
      margin-top: 10vw;
      font-size: 0.8vw;
      font-weight: 600;
      button {
        margin-bottom: 1vw;
        width: 17vw;
        height: 2.2vw;
        font-size: 0.6vw;
        text-align: center;
        background-color: #119b15;
        color: white;
        opacity: 1;
        &:hover {
          opacity: 0.7;
        }
        &:disabled {
          opacity: 0.5;
        }
      }
    }
    &:nth-child(3) {
      margin-right: 0;
    }
    .menu__item__input {
      display: flex;
      flex-direction: column;
      font-size: 0.8vw;
      font-weight: 600;
      margin-bottom: 0.5vw;
      label {
        margin-bottom: 0.3vw;
      }
      input {
        width: 25.5vw;
        height: 1.1vw;
        font-weight: 600;
        font-size: 0.8vw;
      }
      select {
        font-size: 0.7vw;
        width: 26vw;
        outline: none;
        font-weight: 600;
      }
      .select__multiple {
        border: 0.1vw solid black;
        border-radius: 0;
      }
      .select__standart {
        height: 1.5vw;
        appearance: none;
        background: url('../assets/arrow.png') no-repeat right / 1.25vw 1.25vw;
        border: 0.01vw solid black;
        border-radius: 0;
      }
      .error {
        color: red;
      }
    }
  }
  @media(max-width: 700px) {
    form {
      flex-direction: column;
      .menu__unit__input {
        margin: 0 0 2vw 5vw;
        .submit {
          margin: 3vw 0 0 4vw;
          font-size: 0.8vw;
        }
      }
    }
  }
}

</style>
