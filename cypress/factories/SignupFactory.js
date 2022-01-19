var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '11999999999',
                address: {  
                    postalcode: '25635170',
                    street: 'Rua Professora Hercília Henriques Moret',
                    number: '110a',
                    details: 'Servidão Mario Barbati 4',
                    district: 'Alto da Serra',
                    city_state: 'Petrópolis/RJ'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }
        
        return data
    }
}
