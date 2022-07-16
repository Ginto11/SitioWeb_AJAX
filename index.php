<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Pagina Interactiva</title>
</head>
<body>
    <main id="root">
        <header>
            <?php include('components/encabezado.php') ?>
            <?php encabezado()  ?>
        </header>
        <section class="contenedor__section">
            <aside>
                <?php include("components/menu.php")  ?>
                <?php aside()  ?>
            </aside>
            <article class="articulo">

            </article>
        </section>
    </main>
    
    <script src="js/script.js"></script>
</body>
</html>