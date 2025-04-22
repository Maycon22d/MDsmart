<?php include 'includes/conexao.php';?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <?php include 'includes/menu.php'; ?>
    <div class="container">
        <h1>Cadastro</h1>
        <form action="#" method="post">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" required>

            <label for="endereco">Endereço:</label>
            <input type="text" name="endereco" id="endereco" required>

            <label for="bairro">Bairro:</label>
            <input type="text" name="bairro" id="bairro" required>

            <label for="cidade">Cidade:</label>
            <input type="text" name="cidade" id="cidade" required>

            <label for="uf">UF:</label>
            <input type="text" name="uf" id="uf" maxlength="2" required>

            <label for="cep">CEP:</label>
            <input type="text" name="cep" id="cep" required>

            <label for="celular">Celular:</label>
            <input type="text" name="celular" id="celular" required>

            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" required>

            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf" required>

            <label for="datadenascimento">Data de nascimento:</label>
            <input type="date" name="datadenascimento" id="datadenascimento" required>

            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha" required>

            <button type="submit" class="btn">Cadastrar</button>
        </form>
    </div>
</body>
</html>
