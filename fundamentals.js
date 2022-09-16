const aCar = {
    owner : "Joe Bloggs",
    // type : 'Toyota Corolla 1.8',
    //registration : '201WD1058',

    type : {
    make : 'Toyota',
    model : 'Corolla',
    CC : 1.8
    },

    registration : {
      year : 201,
      countyCode : 'WD',
      number : 1058
    }


    
  }

  aCar.mileage = 10000;
  aCar.colour = {
    extColour : "red",
    interior : {
      texture : 'leather',
      shade : 'cream'
    } 


  }
  console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.countyCode + '-' + aCar.registration.number)
  console.log('It is a ' + aCar.colour.extColour + ' car, ' + aCar.mileage + ' mileage, with ' + aCar.colour.interior.texture + " interior")


