const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];
  const maiorNota = (notas) => {
    let maior = notas[0];
    let index;
    notas.reduce((a, b, i) => {
        if(b >= maior) {
            maior = b;
            index = i;
        }
    },notas[0]);
    return index;
  }

  const separaNota = (alunos) => {
    return alunos.map((element) => {
        let materias = element.materias;
        let notas = materias.map((materias) => {
            return materias.nota;
        });
        return maiorNota(notas);
    });
}

  const nomeMaterias = (estudantes) => {
    let result = estudantes.map((element) => {
        return {aluno: element.nome, materias: element.materias};
    }); 
    return result;
  };

  const relatorio = (estudantes) => {
    const estudantesNomeMateria = nomeMaterias(estudantes);
    const estudanteNota = separaNota(estudantesNomeMateria);
    estudantesNomeMateria.map((element, i) => {
        console.log({nome: element.aluno, materia: element.materia[estudanteNota[i]].nota} );
    });
  }
  

  console.log(relatorio(estudantes));
  //nomeMaterias(estudantes);