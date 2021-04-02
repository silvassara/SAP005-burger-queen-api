
const getAllUsers = (req, res) => {
    res.status(200).send({
      mensagem: 'mostrando todos os usuarios'
    })
} 

const getUserById = (req, res) => {
  const id = req.params.uid

  if (id === 'especial'){
      res.status(200).send({
          mensagem: 'voce descobriu o id especial',
          id: id
      });
  } else {
      res.status(200).send({
          mensagem: `voce acessou o usuario ${id}`
      })
  };
}

const createUser = (req, res) => {
  res.status(200).send({
    mensagem: 'usando o POST na rota users'
  })
}

const updateUser = (req, res) => {
  res.status(201).send({
    mensagem: 'usando o PUT na rota users'
  })
}

const deleteUser = (req, res) => {
  res.status(200).send({
    mensagem: 'usando o DELETE na rota users'
  })
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }