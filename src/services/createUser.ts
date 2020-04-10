interface TechsObject{
    title: string;
    experience: number
}

interface CreateUserData{
    //Estou criando uma tipagem para o objeto de usuário
    name?: string; //O name possui o ? por que é opcional
    email: string;
    password: string;
    techs: Array<string | TechsObject>
}

export default function createUser({ name = '', email, password, techs }: CreateUserData){
    const user = {
        name,
        email,
        password,
        techs
    };

    return user;
} 