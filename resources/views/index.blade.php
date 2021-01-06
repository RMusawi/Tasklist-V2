<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ToDo2</title>

        <link href="{{ 'css/app.css' }}" rel="stylesheet">
        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{ 'js/app.js' }}"></script>
    </body>
</html>
