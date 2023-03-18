import { prisma } from "../database";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { firstName, lastName, email, username, avatar, student, schoolId} = request.body;

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        avatar,
        student,
        schoolId
      }
    })
    return response.json(user);
  }
}