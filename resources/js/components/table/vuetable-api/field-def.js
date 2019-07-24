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
        name: "age",
        sortField: "birthdate",
        dataClass: "text-center"
    },
    {
        name: "birthdate",
        title: 'Birthdate',
        sortField: "birthdate",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: function(value, fmt = "DD MMM, YYYY") {
            return value == null ? "" : moment(value, "YYYY-MM-DD").format(fmt);
        }
    },
    {
        name: "nickname",
        title: ' Nickname',
        sortField: "nickname",
        callback: function(value) {
            return value.toUpperCase();
        }
    },
    {
        name: "gender",
        title: 'Gender',
        sortField: "gender",
        titleClass: "text-center",
        dataClass: "text-center",
        callback: function(value) {
            return value === "M"
                ? '<span class="badge badge-success"><span class="fa fa-star"></span> Male</span>'
                : '<span class="badge badge-info"><span class="fa fa-heart"></span> Female</span>';
        }
    },
    {
        name: "salary",
        title: 'Salary',
        sortField: "salary",
        titleClass: "text-center",
        dataClass: "text-right"
    },
    {
        name: "actions",
        title: "Actions",
        titleClass: "text-center",
        dataClass: "text-center"
    }
];
