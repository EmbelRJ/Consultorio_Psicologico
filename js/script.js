jQuery.validator.setDefaults({
    debug: false,
});

$("#form-login").validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 8,
        }
    },
    messages: {
        email: {
            required: "Por favor, informe seu e-mail.",
        },
        password: {
            required: "Por favor, informe sua senha.",
            minlength: "A senha deve conter no minimo 8 digitos."
        },
    },
});

$("#form-psico").validate({
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 8,
        },
        cpf: {
            required: true,
            number: true
        },
        crp: {
            required: true,
            number: true
        },
        phone: {
            required: true,
        }
    },
    messages: {
        email: {
            required: "Por favor, informe o e-mail.",
        },
        name: {
            required: "Por favor, informe o nome.",
        },
        cpf: {
            required: "Por favor, informe o cpf.",
        },
        crp: {
            required: "Por favor, informe o crp.",
        },
        phone: {
            required: "Por favor, informe o Telefone.",
        },
        password: {
            required: "Por favor, informe a senha.",
            minlength: "A senha deve conter no minimo 8 digitos."
        },
    },
});

$("#form-cliente").validate({
    rules: {
        name: {
            required: true,
        },
        img: {
            required: true,
        },
        nasimento: {
            required: true,
        },
        ed: {
            required: true,
        },
        sx: {
            required: true,
        },
        ps: {
            required: true,
        },
        password: {
            required: true,
            minlength: 8,
        },
        cpf: {
            required: true,
            number: true
        },
        ob: {
            required: true,
        },
        phone: {
            required: true,
        }
    },
    messages: {
        name: {
            required: "Por favor, informe o nome.",
        },
        img: {
            required: "Por favor, informe a imagem.",
        },
        nasimento: {
            required: "Por favor, informe o nascimento.",
        },
        ed: {
            required: "Por favor, informe o endereço.",
        },
        sx: {
            required: "Por favor, informe o sexo.",
        },
        ps: {
            required: "Por favor, informe o plano de saude.",
        },
        phone: {
            required: "Por favor, informe o Telefone.",
        },
        cpf: {
            required: "Por favor, informe o cpf.",
        },
        ob: {
            required: "Por favor, informe a observação.",
        },
        password: {
            required: "Por favor, informe a senha.",
            minlength: "A senha deve conter no minimo 8 digitos."
        },
    },
});

$("#form-sessao").validate({
    rules: {
        ida: {
            required: true,
            number: true
        },
        data: {
            required: true,
        },
        qx: {
            required: true,
        },
        tr: {
            required: true,
        },
        dg: {
            required: true,
        },
        rs: {
            required: true,
        },
        ev: {
            required: true,
        },
        pg: {
            required: true,
        }
    },
    messages: {
        ida: {
            required: "Esse campo não pode ser vazio!",
        },
        data: {
            required: "Esse campo não pode ser vazio!",
        },
        qx: {
            required: "Esse campo não pode ser vazio!",
        },
        tr: {
            required: "Esse campo não pode ser vazio!",
        },
        dg: {
            required: "Esse campo não pode ser vazio!",
        },
        rs: {
            required: "Esse campo não pode ser vazio!",
        },
        ev: {
            required: "Esse campo não pode ser vazio!",
        },
        pg: {
            required: "Esse campo não pode ser vazio!",
        }
    },
});

$("#form-anamnese").validate({
    rules: {
        idp: {
            required: true,
        },
        idps: {
            required: true,
        },
        qx: {
            required: true,
        },
        st: {
            required: true,
        },
        tra: {
            required: true,
        },
        md: {
            required: true,
        },
        if: {
            required: true,
        },
        rt: {
            required: true,
        },
        vc: {
            required: true,
        },
        hb: {
            required: true,
        },
        trb: {
            required: true,
        },
        hf: {
            required: true,
        },
        cp: {
            required: true,
        },
        lg: {
            required: true,
        },
        hu: {
            required: true,
        },
        hpt: {
            required: true,
        },
        obs: {
            required: true,
        },
        ns: {
            required: true,
        },
        vl: {
            required: true,
        },
        pl: {
            required: true,
        },


    },
    messages: {
        idp: {
            required: "Esse campo não pode ser vasio.",
        },
        idps: {
            required: "Esse campo não pode ser vasio.",
        },
        qx: {
            required: "Esse campo não pode ser vasio.",
        },
        st: {
            required: "Esse campo não pode ser vasio.",
        },
        tra: {
            required: "Esse campo não pode ser vasio.",
        },
        md: {
            required: "Esse campo não pode ser vasio.",
        },
        if: {
            required: "Esse campo não pode ser vasio.",
        },
        rt: {
            required: "Esse campo não pode ser vasio.",
        },
        vc: {
            required: "Esse campo não pode ser vasio.",
        },
        hb: {
            required: "Esse campo não pode ser vasio.",
        },
        trb: {
            required: "Esse campo não pode ser vasio.",
        },
        hf: {
            required: "Esse campo não pode ser vasio.",
        },
        cp: {
            required: "Esse campo não pode ser vasio.",
        },
        lg: {
            required: "Esse campo não pode ser vasio.",
        },
        hu: {
            required: "Esse campo não pode ser vasio.",
        },
        hpt: {
            required: "Esse campo não pode ser vasio.",
        },
        obs: {
            required: "Esse campo não pode ser vasio.",
        },
        ns: {
            required: "Esse campo não pode ser vasio.",
        },
        vl: {
            required: "Esse campo não pode ser vasio.",
        },
        pl: {
            required: "Esse campo não pode ser vasio.",
        },
    },
});