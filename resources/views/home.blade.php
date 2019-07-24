<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Vuedatatables example</title>


    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>

<body>
    <div id="app">
        <navbar></navbar>
        @if (!Request::is('laravel-api'))
            <home-component api="https://vuetable.ratiw.net/api/users" class="mt-5" />
        @else
            <home-component api="http://127.0.0.1:8000/api/v1/users" class="mt-5" />
        @endif
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>