export default [
  {
    id: 1,
    city: {
      name: `Paris`,
      location: {
        latitude: 50.38333,
        longitude: 4.9,
        zoom: 10
      }
    },
    photos: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Beautiful & luxurious apartment at great location`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    isPremium: true,
    type: `APARTMENT`,
    rating: 4.8,
    bedroomsNumber: 3,
    adultsNumber: 4,
    price: 120,
    insideList: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      src: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isPro: true,
      id: 1
    },
    isFavorite: true,
    previewPhoto: `img/room.jpg`,
    location: {
      latitude: 50.3909553943508,
      longitude: 4.85309666406198,
      zoom: 4
    }
  }, {
    id: 2,
    city: {
      name: `Paris`,
      location: {
        latitude: 50.38333,
        longitude: 4.9,
        zoom: 10
      }
    },
    photos: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Nice, cozy, warm big bed apartment`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    isPremium: true,
    type: `ROOM`,
    rating: 4.0,
    bedroomsNumber: 10,
    adultsNumber: 1,
    price: 320,
    insideList: [`Washing machine`, `Towels`, `Coffee machine`, `Baby seat`, `Kitchen`, `Cabel TV`],
    host: {
      src: `img/avatar-angelina.jpg`,
      name: `Linda`,
      isPro: true,
      id: 8
    },
    isFavorite: true,
    previewPhoto: `img/room.jpg`,
    location: {
      latitude: 50.369553943508,
      longitude: 4.85309666406198,
      zoom: 4
    }
  }, {
    id: 3,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      }
    },
    photos: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Beautiful & luxurious house at great location`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    isPremium: true,
    type: `HOUSE`,
    rating: 3.5,
    bedroomsNumber: 7,
    adultsNumber: 2,
    price: 200,
    insideList: [`Wi-Fi`, `Washing machine`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      src: `img/avatar-angelina.jpg`,
      name: `Tom`,
      isPro: false,
      id: 5
    },
    isFavorite: true,
    previewPhoto: `img/apartment-03.jpg`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 4
    }
  }, {
    id: 4,
    city: {
      name: `Paris`,
      location: {
        latitude: 50.38333,
        longitude: 4.9,
        zoom: 10
      }
    },
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`],
    title: `Beautiful & luxurious hotel at great location`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`, `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`],
    isPremium: false,
    type: `HOTEL`,
    rating: 2.1,
    bedroomsNumber: 2,
    adultsNumber: 5,
    price: 100,
    insideList: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      src: `img/avatar-angelina.jpg`,
      name: `Max`,
      isPro: true,
      id: 2
    },
    isFavorite: true,
    previewPhoto: `img/apartment-01.jpg`,
    location: {
      latitude: 50.3809553943508,
      longitude: 4.939309666406198,
      zoom: 4
    }
  }
];
