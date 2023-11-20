function snake_case(correcao){

    const min = correcao.toLowerCase();
    const snakeCase = min.replace(/\s+/g,'_');
    return snakeCase;

}

const entrada = snake_case("HelLo WorlD ");

const entrada_2 = snake_case("essE eh O SNAKE case");

const entrada_3 = snake_case("Ola TUDo beM");
