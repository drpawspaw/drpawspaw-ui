import { BOT, CAT, DOG, USER } from "../constants";

export const conversations = [
  {
    timestamp: "",
    content: "Message1",
    sender: USER,
  },
  {
    timestamp: "",
    content: "Message2",
    sender: BOT,
  }
];

export const currentUserDetails = () => {
  return {
    name: "Jennifer Lopez",
    email: "jennifer_lopez@drpawspaw.com",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    pets: [
      {
        name: "Tommy",
        type: CAT,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: false,
      },
      {
        name: "Jimmy",
        type: DOG,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: true,
      },
      {
        name: "Rexy",
        type: CAT,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: true,
      },
      {
        name: "Tyson",
        type: DOG,
        breed: "Shitzu",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: false,
      },
      {
        name: "Tommy",
        type: CAT,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: false,
      },
      {
        name: "Jimmy",
        type: DOG,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: true,
      },
      {
        name: "Rexy",
        type: CAT,
        breed: "German Sherpad",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: true,
      },
      {
        name: "Tyson",
        type: DOG,
        breed: "Shitzu",
        birthDay: "2022-12-19",
        lastVaccine: "Parvo",
        lastVaccineDate: "2023-01-12",
        notificationEnabled: true,
      },
    ],
    upcomingVaccines: [
      {
        name: "Canine Distemper Virus",
        date: "2023-01-02",
        petName: "Jimmy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-01-12",
        petName: "Tyson",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-01-22",
        petName: "Tommy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-02-02",
        petName: "Rexy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-02-04",
        petName: "Tyson",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-04-02",
        petName: "Tommy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-05-01",
        petName: "Tyson",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-01-02",
        petName: "Jimmy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-01-12",
        petName: "Tyson",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-01-22",
        petName: "Tommy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-02-02",
        petName: "Rexy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-02-04",
        petName: "Tyson",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-04-02",
        petName: "Tommy",
      },
      {
        name: "Canine Distemper Virus",
        date: "2023-05-01",
        petName: "Tyson",
      },
    ],
  };
};
