import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        name: 'Yuri Baza',
        email: 'yuribaza@newhappen.com.br',
        password: '123456789',
        techs: [
            'Flutter',
            'ReactJS',
            'React Native',
            'NodeJS',
            {title: 'javascript', experience: 55},
            {title: 'typescript', experience: 0},
        ]
    })
    return res.json({ message: 'Typescript Project' })
}