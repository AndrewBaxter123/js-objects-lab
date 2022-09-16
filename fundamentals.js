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
  console.log('Reg. = ' + aCar.registration.year + '-' + aCar.registration.countyCode + '-' + aCar.registration.number)
