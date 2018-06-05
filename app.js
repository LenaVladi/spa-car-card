function car (name, model, owner, year, phone, image) {
  return {
    name, model, owner, year, phone, image
  }
}

const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
  car('Ferrari', 'Caglietti', 'Max', 2015, '+7 925 644 76 45', 'img/Ferrari612Scaglietti.jpg'),
  car('Mazda', 'Takeri', 'Dave', 2012, '+7 999 675 23 36', 'img/Mazda-takeri.jpg'),
  car('Porsche', '911 - Turbo', 'Oleg', 2016, '+7 962 342 86 44', 'img/Porsche-911-Turbo.jpg'),
]

new Vue({
  el: '#app',

  data: { // свойства
    cars: cars, // общий массив машин
    car: cars[0], // объект данные которого интерполируются на странице
    logs: [],
    selectCarIndex: 0, // индекс выбранного автомобиля 
    phoneVisibility: false, // скрывает телефон
    search: '',
    modavVisibility: false
  },

  methods: {
    selectCar: function(index) { // запускается при клике
      this.car = cars[index];
      this.selectCarIndex = index;
    },

    newOrder() {
      this.modavVisibility = false;
      this.logs.push(log(
        `Succcess order: ${this.car.name} - ${this.car.model}`, 'ok'
      ));
    },

    cancelOrder() {
      this.modavVisibility = false;
      this.logs.push(log(
        `Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'
      ));
    }
  },

  computed: { // зависимые переменные
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone';
    },

    filteredCars() { // фильтрация поиска по списку
      return this.cars.filter(car => {
        return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }

  },

  filters: {
    date(value) {
      return value.toLocaleString();
    }
  }
})