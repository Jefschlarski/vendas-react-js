export function handleApiError(error) {
    if (!error.response) {
      return "Erro de conexão. Tente novamente mais tarde.";
    }
  
    const { status } = error.response;
  
    switch (status) {
      case 400:
        return "Requisição inválida.";
      case 401:
        return "Voce não tem permissão para acessar este recurso.";
      case 403:
        return "Permissão negada.";
      case 404:
        return "Recurso não encontrado.";
      case 500:
        return "Erro no servidor. Tente novamente mais tarde.";
      default:
        return "Ocorreu um erro inesperado.";
    }
  }