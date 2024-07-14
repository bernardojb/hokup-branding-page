export default function validadeInfo(values) {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = "focus:";
  }

  //Email
  if (!values.email) {
    errors.email = "digite o seu email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email inválido.";
  }

  const phoneString = values.phone;
  const totalCharacters = phoneString.length;
  //Phone
  if (!values.phone) {
    errors.phone = "digite seu telefone?";
  } else if (totalCharacters < 15) {
    errors.phone = "digite um número de telefone válido";
  }

  if (!values.office) {
    errors.office = "digite seu telefone?";
  }

  if (!values.institution) {
    errors.institution = "digite seu telefone?";
  }

  if (!values.referal) {
    errors.referal = "digite seu telefone?";
  }

  //Message
  if (!values.message) {
    errors.message = "nos conte um pouco sobre seu projeto!";
  }

  return errors;
}
