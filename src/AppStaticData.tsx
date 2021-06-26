import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";

import { getUser } from "./api/User";
import { setUser } from "./reducers/UserAction";
import { getPhoto } from "./api/Photo";
import Router from "./Router/Router";
import { setPhoto } from "./reducers/PhotoAction";
import { setUserData } from "./reducers/UserDataAction";
import { getWorkplaces } from "./api/Workplace";
import { setWorkplace } from "./reducers/WorkplaceAction";
import { UserData } from "./entities/userData";


function AppStaticData() {
    const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData() {
      const user = await getUser()
        .then(response => response.json())
        .then(data => {
          dispatch(setUser(data));
          return data;
        });

      if ("id" in user) {
        getPhoto(user.id)
          .then(response => response.json())
          .then(data => {
            dispatch(setPhoto(data));
          });
      }
    }

    function getStaticUserData() {
      
      const obj: UserData = {
        expertise: { "e4356ff": "Mergers and acquisition" },
        specialties: { "s46354543": "Cross border operation", "s56756856": "Transaction over 500M€/$" },
        admission: { "a879565": "Paris bar association", "a5674345": "Tunisian bar association" },
        counties: { "c6486796": "Tunisia" },
        informations: {
          hourlyFee: "610€/hour",
          hourlyFeeNegociated: true,
        },
        terms: {},
        services: {
          "1": "Corporate M&A and international acqusitions",
        },
        proposals: [
          { id: 1, name: 'Operation', entity: 'Renault', location: 'France', expertise: '#Tax', date: randomCreatedDate(), firm: 'Racine' },
          { id: 2, name: 'Op. Prometh', entity: 'Renault', location: 'USA', expertise: '#M&A', date: randomCreatedDate(), firm: 'Clifford chance' },
          { id: 3, name: 'Op. Latandre', entity: 'Renault', location: 'Italia', expertise: '#Social', date: randomCreatedDate(), firm: 'SVZ' },
        ],
        internalReviews: [
          { id: 1, name: 'Operation', entity: 'Renault', location: 'France', expertise: '#Tax', date: randomCreatedDate() },
          { id: 2, name: 'Op. Prometh', entity: 'Renault', location: 'USA', expertise: '#M&A', date: randomCreatedDate() },
          { id: 3, name: 'Op. Latandre', entity: 'Renault', location: 'Italia', expertise: '#Social', date: randomCreatedDate() },
        ],
        fees: [
          { id: 1, year: '2019', cost_center: 'CS 153', total_amount: '3 500€', law_firm: 'Clifford chance' },
          { id: 2, year: '2018', cost_center: 'CS 153', total_amount: '9 500€', law_firm: 'Linklaters' },
          { id: 3, year: '2017', cost_center: 'CS 47', total_amount: '10 500€', law_firm: 'Linklaters' },
          { id: 4, year: '2016', cost_center: 'CS 153', total_amount: '18 500€', law_firm: 'Linklaters' },
          { id: 5, year: '2015', cost_center: 'CS 32', total_amount: '15 500€', law_firm: 'Linklaters' },
        ]
      }

      dispatch(setUserData(obj));
    }

    getStaticUserData();
    getUserData();
    getWorkplaces()
      .then(response => {
        dispatch(setWorkplace(response))
      });
  });

  return <Router />
}

export default AppStaticData;