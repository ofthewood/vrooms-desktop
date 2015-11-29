Template.timeslots.helpers({
    /*
     return last update time.
     */
    infoMaj: function () {
        var lastupdate = LastUpdate.findOne({});
        return moment(lastupdate.lastdate).format('HH:mm:ss');
    },
    /*
     return all data the the Day
     */
    daySetting: function () {
        debugger;
        var dayContext = Agenda.daysContext(Router.current().params.dayProcessed);
        _.extend(this, dayContext);
        return this;
    },
    /*
     Date format court
     */
    shortTimeslot: function (date) {
        return moment(date).format('HH') + 'h-' + moment(date).add(1, 'hour').format('HH') + 'h';
    },
    /*
     expand flag  for  horaire and category
     */
    hasToShowed: function (categorie) {
        var isFound = Filters.findOne({horaire: this.horaire, categorie: categorie});
        return !!isFound;
    },
    timeslotsList: function () {
        var dateMin = moment().add(-1, 'hour').toDate();
        var cursor = Timeslots.find({horaire: {$gt: dateMin}}, {sort: {horaire: 1}}).fetch();

        if (!cursor[0]) {
            return;
        }
        Session.set('FirstTimeSlotId', cursor[0]._id);
        return cursor;
    },
    isNewDay: function () {
        var isNewDay = false;
        if (moment(this.horaire).hour() == 9 || Session.get('FirstTimeSlotId') == this._id) {
            isNewDay = true;
        }
        return isNewDay;
    },
    formatedDay: function (date) {
        return moment(date).format('dddd LL');
    },
    /*,
     icsfile: function () {
     return Meteor.absoluteUrl() + 'icsfile?id=' + this._id;
     },
     counter: function () {
     var meeting = Meetings.findOne(this._id);
     if (!meeting) {return null;}
     if (!meeting.counter) {return null;}
     if (meeting.counter == 0) {return null;}
     return meeting.counter;
     },
     isShowed: function (categorie) {
     //  in this.categorie
     // in this .horaire
     //  2 cas   affichage globale cat?gorie
     // affichage  demand?e de horaire / categorie

     // hidden show
     //debugger;
     var isFound = Filters.findOne({horaire: this.horaire, categorie: categorie});
     if (isFound) {
     return "show"
     } else {
     return "hidden"
     }

     },
     formatedDay: function (date) {
     return moment(date).format('dddd LL');
     },
     dispos: function () {
     return "(" + this.iNbSalle + "/" + this.iNbBox + "/" + this.iNbAutre + ")";
     },
     lastUpdate: function () {
     Session.get('refreshInterval');
     var lastUdpateRoom = Rooms.findOne({}, {sort: {updatedAt: -1}});
     if (!lastUdpateRoom) {
     return null;
     }
     var a = moment();
     var b = moment(lastUdpateRoom.updatedAt);
     return " Maj: " + moment(lastUdpateRoom.updatedAt).fromNow();
     },
     actu: function () {
     Session.get('refreshInterval');
     var a = moment();
     var b = moment(this.updatedAt);
     var diff = a.diff(b, 'minutes');
     if (!(typeof this.updatedAt === 'undefined')) {
     if (diff < 16 && this.mvt != 0) {
     return "(" + this.mvt + ") " + moment(this.updatedAt).fromNow();
     }
     }
     }*/
})
;
Template.timeslots.events({
    "click .item-salle, tap .item-salle": function () {
        Agenda.flipFlapFilter(this.horaire, this.iNbSalle, "listSalle");
    },
    "click .item-box, tap .item-box": function () {
        Agenda.flipFlapFilter(this.horaire, this.iNbBox, "listBox");
    },
    "click .item-autre, tap .item-autre": function () {
        Agenda.flipFlapFilter(this.horaire, this.iNbAutre, "listAutre");
    }

});


Template.roomsListBrowser.helpers({
    isRoomBooked: function () {
        var isFound = RoomsBooked.findOne({horaire: this.debut, roomMail: this.mail});
        if (!!isFound) return true;
        else return false;
    },
    hasToShowed: function (parentContext) {
        debugger;
        this.listeRooms = parentContext[this.ressourceType];
        var isFound = Filters.findOne({horaire: parentContext.horaire, categorie: this.ressourceType});
        return !!isFound;
    },
    decodeSalleName: function () {
        var SalleInfo = Agenda.decodeRoomName(this.name);
        this.place = SalleInfo.place;
        this.fullType = SalleInfo.fullType;
        switch (SalleInfo.aile) {
            case "V":
                this.badgeColor = "badge-success";
                break;
            case "J":
                this.badgeColor = "badge-warning";
                break;
            case "B":
                this.badgeColor = "badge-primary";
                break;
            case "R":
                this.badgeColor = "badge-danger";
                break;
            default :
                this.badgeColor = "";
                break;
        }
        this.shortName = SalleInfo.shortName;
        this.infoName = SalleInfo.infoName;
        if (this.horaire.getTime() != this.debut.getTime()) {
            this.demiheure = true;
        }
        return;
    },
    Selected: function () {
        if (Session.equals("selectedRoom", this._id)) return "room-item-selected";
        else return "room-item-notselected";
    }
});

Template.timeslots.events({
    "click .sendMail, tap .sendMail": function (e) {
        if (!Meteor.user()) {
            alert('Veuillez saisir votre @mail d\'abord');
            return;
        }
        var userMail = Meteor.user().emails[0].address || '';
        Meteor.call("sendMeetingMail", this._id, userMail);
        $(e.currentTarget).removeClass("animated tada").addClass("animated wobble");
        //Meetings.update(this._id, {$inc: { counter: 1 }});

    },
    "click .uploadCalendar, tap .uploadCalendar": function (e) {
        $(e.currentTarget).removeClass("animated tada").addClass("animated wobble");
         var fileUrl = Meteor.absoluteUrl() + 'icsfile?id=' + this._id;
         console.log(fileUrl);
         Router.go(fileUrl);


    }

});
