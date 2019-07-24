import moment from 'moment'

export default [
    {
        name: "id",
        title: "#ID",
        callback: function(value) {
            return "#" + value;
        }
    },
    {
        name: "name",
        title: "Name",
        sortField: "name"
    },
    {
        name: "email",
        title: "Email Address",
        sortField: "email"
    },
    {
        name: "actions",
        title: "Actions",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
