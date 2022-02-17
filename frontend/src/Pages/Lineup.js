import React from 'react'
import '../assets/Style/Pages.css'
import { Button } from 'react-bootstrap'
import Player from '../components/Player/Player';
import "react-bootstrap"
import Navbar from '../components/Navbar/Navbar';
import { arrayPlayers, arrayplayersRating, arrayPlayerTrainingRating1, arrayPlayerTrainingRating2 } from '../Constants/Constants';
import { arrayPlayerTrainingRating3, arrayPlayerTrainingRating4, arrayPlayerTrainingRating5 } from '../Constants/Constants';
import { arrayPlayerMatchRating1, arrayPlayerMatchRating2 } from '../Constants/Constants';
import ModalInjured from '../components/Modal/ModalInjured';
import { useState } from 'react';



export const Lineup = () => {

    const [best_for1, setBest_for1] = useState("None");
    const [best_for2, setBest_for2] = useState("None");

    const [best_Att_Mid_Center1, setBest_Att_Mid_Center1] = useState("None");
    const [best_Att_Mid_Center2, setBest_Att_Mid_Center2] = useState("None");


    const [best_Att_Mid_Right1, setBest_Att_Mid_Right1] = useState("None");
    const [best_Att_Mid_Right2, setBest_Att_Mid_Right2] = useState("None");

    const [best_Att_Mid_Left1, setBest_Att_Mid_Left1] = useState("None");
    const [best_Att_Mid_Left2, setBest_Att_Mid_Left2] = useState("None");

    const [best_Midfielder1, setBest_Midfielder1] = useState("None");
    const [best_Midfielder2, setBest_Midfielder2] = useState("None");
    const [best_Midfielder3, setBest_Midfielder3] = useState("None");



    const [best_Right_Defender1, setBest_Right_Defender1] = useState("None");
    const [best_Right_Defender2, setBest_Right_Defender2] = useState("None");

    const [best_Central_Defender1, setBest_Central_Defender1] = useState("None");
    const [best_Central_Defender2, setBest_Central_Defender2] = useState("None");
    const [best_Central_Defender3, setBest_Central_Defender3] = useState("None");

    const [best_Left_Defender1, setBest_Left_Defender1] = useState("None");
    const [best_Left_Defender2, setBest_Left_Defender2] = useState("None");

    const [best_Goalkeeper1, setBest_Goalkeeper1] = useState("None");
    const [best_Goalkeeper2, setBest_Goalkeeper2] = useState("None");


    const suggested_lineup = () => {
        const filtered_by_position_Forward = arrayPlayers.filter((player) => {
            return player.position === "Forward";
        })

        const filtered_by_position_Att_Mid_Center = arrayPlayers.filter((player) => {
            return player.position === "Attacking Midfielder center";
        })

        const filtered_by_position_Att_Mid_Right = arrayPlayers.filter((player) => {
            return player.position === "Attacking Midfielder Right";
        })
        const filtered_by_position_Att_Mid_Left = arrayPlayers.filter((player) => {
            return player.position === "Attacking Midfielder Left";
        })
        const filtered_by_position_Midfielder = arrayPlayers.filter((player) => {
            return player.position === "Midfielder";
        })

        const filtered_by_position_Right_Defender = arrayPlayers.filter((player) => {
            return player.position === "Right Defender";
        })

        const filtered_by_position_Left_Defender = arrayPlayers.filter((player) => {
            return player.position === "Left Defender";
        })

        const filtered_by_position_Central_Defender = arrayPlayers.filter((player) => {
            return player.position === "Central Defender";
        })


        const filtered_by_position_Goalkeeper = arrayPlayers.filter((player) => {
            return player.position === "Goalkeeper";
        })




        var AVG_Forward = [];
        var AVG_Att_Mid_Center = [];
        var AVG_Att_Mid_Right = [];
        var AVG_Att_Mid_Left = [];
        var AVG_Midfielder = [];
        var AVG_Right_Defender = [];
        var AVG_Left_Defender = [];
        var AVG_Central_Defender = [];
        var AVG_Goalkeeper = [];


        var Player_rating_Forward = [];
        var Player_rating_Att_Mid_Center = [];
        var Player_rating_Att_Mid_Right = [];
        var Player_rating_Att_Mid_Left = [];
        var Player_rating_Midfielder = [];
        var Player_rating_Right_Defender = [];
        var Player_rating_Left_Defender = [];
        var Player_rating_Central_Defender = [];
        var Player_rating_Goalkeeper = [];



        var AVG_Forward_training = [];
        var AVG_Att_Mid_Center_training = [];
        var AVG_Att_Mid_Right_training = [];
        var AVG_Att_Mid_Left_training = [];
        var AVG_Midfielder_training = [];
        var AVG_Right_Defender_training = [];
        var AVG_Left_Defender_training = [];
        var AVG_Central_Defender_training = [];
        var AVG_Goalkeeper_training = [];

        var AVG_Forward_trainings = [];


        var AVG_Forward_Match = [];
        var AVG_Att_Mid_Center_Match = [];
        var AVG_Att_Mid_Right_Match = [];
        var AVG_Att_Mid_Left_Match = [];
        var AVG_Midfielder_Match = [];
        var AVG_Right_Defender_Match = [];
        var AVG_Left_Defender_Match = [];
        var AVG_Central_Defender_Match = [];
        var AVG_Goalkeeper_Match = [];





        var temp_FOR = 0;
        var temp_AMC = 0;



        //avg statistics for forwards

        filtered_by_position_Forward.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_FOR = ((
                        0.05 * parseFloat(player.Aerial_ability) +
                        0.05 * parseFloat(player.Agility) +
                        0.05 * parseFloat(player.Communication) +
                        0.05 * parseFloat(player.Composure) +
                        0.05 * parseFloat(player.Dribbling) +
                        0.05 * parseFloat(player.Experience) +
                        0.1 * parseFloat(player.Finishing) +
                        0.05 * parseFloat(player.Leadership) +
                        0.05 * parseFloat(player.Pace) +
                        0.05 * parseFloat(player.Passing) +
                        0.05 * parseFloat(player.Personality) +
                        0.1 * parseFloat(player.Positioning) +
                        0.05 * parseFloat(player.Shots) +
                        0.05 * parseFloat(player.Stamina) +
                        0.05 * parseFloat(player.Strength) +
                        0.05 * parseFloat(player.Tactics) +
                        0.05 * parseFloat(player.Team_work) +
                        0.05 * parseFloat(player.Technique)))
                    // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
                    AVG_Forward.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })



        })


        //avg statistics for forwards training

        filtered_by_position_Forward.map((player_rating) => {


            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Forward_training.push(parseFloat(temp_FOR));
                    AVG_Forward_trainings.push({ id: player_rating.surname, rating: temp_FOR })
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Forward_training.push(parseFloat(temp_FOR));
                    AVG_Forward_trainings.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Forward_training.push(parseFloat(temp_FOR));
                    AVG_Forward_trainings.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Forward_training.push(parseFloat(temp_FOR));
                    AVG_Forward_trainings.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    temp_FOR = temp_FOR / 5;
                    // AVG_Forward_training.push(parseFloat(temp_FOR));
                    AVG_Forward_trainings.push({ id: player_rating.surname, rating: temp_FOR })

                    AVG_Forward_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })

        console.log(AVG_Forward_trainings);




        //avg statistics for forwards Match

        filtered_by_position_Forward.map((player_rating) => {

            AVG_Forward_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Forward_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Forward_Match.push(parseFloat(temp_FOR));
                    AVG_Forward_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })















        //avg statistics for att mid center
        filtered_by_position_Att_Mid_Center.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((
                        0.1 * parseFloat(player.Through_balls) +
                        0.05 * parseFloat(player.Agility) +
                        0.05 * parseFloat(player.Communication) +
                        0.05 * parseFloat(player.Composure) +
                        0.1 * parseFloat(player.Dribbling) +
                        0.05 * parseFloat(player.Experience) +
                        0.05 * parseFloat(player.Finishing) +
                        0.05 * parseFloat(player.Leadership) +
                        0.05 * parseFloat(player.Pace) +
                        0.05 * parseFloat(player.Passing) +
                        0.05 * parseFloat(player.Personality) +
                        0.05 * parseFloat(player.Crossing) +
                        0.05 * parseFloat(player.Shots) +
                        0.05 * parseFloat(player.Stamina) +
                        0.05 * parseFloat(player.Strength) +
                        0.05 * parseFloat(player.Tactics) +
                        0.05 * parseFloat(player.Team_work) +
                        0.05 * parseFloat(player.Technique)))
                    // AVG_Att_Mid_Center.push(player_rating.surname, temp_AMC);
                    AVG_Att_Mid_Center.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })



        })


        //avg statistics training for att mid center
        filtered_by_position_Att_Mid_Center.map((player_rating) => {

            AVG_Att_Mid_Center_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    temp_FOR = temp_FOR / 5;
                    // AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Center_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })













        //avg statistics for att mid center Match

        filtered_by_position_Att_Mid_Center.map((player_rating) => {

            AVG_Att_Mid_Center_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Att_Mid_Center_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Att_Mid_Center_Match.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Center_Match.push({ id: player_rating.surname, rating: temp_FOR })


                    return player;
                }
            })


        })
























        //avg statistics for att mid right

        filtered_by_position_Att_Mid_Right.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((
                        0.1 * parseFloat(player.One_on_ones) +
                        0.05 * parseFloat(player.Agility) +
                        0.05 * parseFloat(player.Communication) +
                        0.05 * parseFloat(player.Composure) +
                        0.1 * parseFloat(player.Dribbling) +
                        0.05 * parseFloat(player.Experience) +
                        0.05 * parseFloat(player.Finishing) +
                        0.05 * parseFloat(player.Leadership) +
                        0.05 * parseFloat(player.Pace) +
                        0.05 * parseFloat(player.Aerial_ability) +
                        0.05 * parseFloat(player.Personality) +
                        0.05 * parseFloat(player.Crossing) +
                        0.05 * parseFloat(player.Shots) +
                        0.05 * parseFloat(player.Stamina) +
                        0.05 * parseFloat(player.Strength) +
                        0.05 * parseFloat(player.Tactics) +
                        0.05 * parseFloat(player.Team_work) +
                        0.05 * parseFloat(player.Technique)))
                    // AVG_Att_Mid_Right.push(player_rating.surname, temp_AMC);
                    AVG_Att_Mid_Right.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })




        })




        //avg statistics training for att mid Right
        filtered_by_position_Att_Mid_Right.map((player_rating) => {

            AVG_Att_Mid_Right_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    temp_FOR = temp_FOR / 5;
                    // AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Right_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })








        //avg statistics for att mid right Match

        filtered_by_position_Att_Mid_Right.map((player_rating) => {


            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Att_Mid_Right_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Att_Mid_Right_Match.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Right_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })




























        //avg statistics for att mid left

        filtered_by_position_Att_Mid_Left.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((
                        0.1 * parseFloat(player.One_on_ones) +
                        0.05 * parseFloat(player.Agility) +
                        0.05 * parseFloat(player.Communication) +
                        0.05 * parseFloat(player.Composure) +
                        0.1 * parseFloat(player.Dribbling) +
                        0.05 * parseFloat(player.Experience) +
                        0.05 * parseFloat(player.Finishing) +
                        0.05 * parseFloat(player.Leadership) +
                        0.05 * parseFloat(player.Pace) +
                        0.05 * parseFloat(player.Aerial_ability) +
                        0.05 * parseFloat(player.Personality) +
                        0.05 * parseFloat(player.Crossing) +
                        0.05 * parseFloat(player.Shots) +
                        0.05 * parseFloat(player.Stamina) +
                        0.05 * parseFloat(player.Strength) +
                        0.05 * parseFloat(player.Tactics) +
                        0.05 * parseFloat(player.Team_work) +
                        0.05 * parseFloat(player.Technique)))
                    // AVG_Att_Mid_Left.push(player_rating.surname, temp_AMC);
                    AVG_Att_Mid_Left.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })


            Player_rating_Att_Mid_Left.push(temp);

        })














        //avg statistics training for att mid Left
        filtered_by_position_Att_Mid_Left.map((player_rating) => {

            AVG_Att_Mid_Left_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    temp_FOR = temp_FOR / 5;
                    // AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Left_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })





        //avg statistics for att mid left Match

        filtered_by_position_Att_Mid_Left.map((player_rating) => {

            AVG_Att_Mid_Left_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Att_Mid_Left_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Att_Mid_Left_Match.push(parseFloat(temp_FOR));
                    AVG_Att_Mid_Left_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })



















        //avg statistics for midfielder

        filtered_by_position_Midfielder.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((
                        0.05 * parseFloat(player.Aerial_ability) +
                        0.05 * parseFloat(player.Agility) +
                        0.05 * parseFloat(player.Communication) +
                        0.05 * parseFloat(player.Composure) +
                        0.05 * parseFloat(player.Creativity) +
                        0.05 * parseFloat(player.Experience) +
                        0.1 * parseFloat(player.Leadership) +
                        0.05 * parseFloat(player.Marking) +
                        0.05 * parseFloat(player.Pace) +
                        0.05 * parseFloat(player.Passing) +
                        0.05 * parseFloat(player.Personality) +
                        0.05 * parseFloat(player.Positioning) +
                        0.05 * parseFloat(player.Shots) +
                        0.1 * parseFloat(player.Stamina) +
                        0.05 * parseFloat(player.Strength) +
                        0.05 * parseFloat(player.Tactics) +
                        0.05 * parseFloat(player.Team_work) +
                        0.05 * parseFloat(player.Technique)))
                    // AVG_Midfielder.push(player_rating.surname, temp_AMC);
                    AVG_Midfielder.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })


        })



        //avg statistics training for att mid Left
        filtered_by_position_Midfielder.map((player_rating) => {

            AVG_Midfielder_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Midfielder_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Midfielder_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Midfielder_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Midfielder_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    temp_FOR = temp_FOR / 5;
                    // AVG_Midfielder_training.push(parseFloat(temp_FOR));
                    AVG_Midfielder_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })




        //avg statistics for midfielder Match

        filtered_by_position_Midfielder.map((player_rating) => {

            AVG_Midfielder_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Midfielder_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Midfielder_Match.push(parseFloat(temp_FOR));
                    AVG_Midfielder_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })














        //avg statistics for right defender

        filtered_by_position_Right_Defender.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((
                        (0.05 * parseFloat(player.Agility)) +
                        (0.05 * parseFloat(player.Communication)) +
                        (0.1 * parseFloat(player.Crossing)) +
                        (0.05 * parseFloat(player.Experience)) +
                        (0.1 * parseFloat(player.Going_forward)) +
                        (0.05 * parseFloat(player.Leadership)) +
                        (0.1 * parseFloat(player.Marking)) +
                        (0.1 * parseFloat(player.Pace)) +
                        (0.05 * parseFloat(player.Passing)) +
                        (0.05 * parseFloat(player.Personality)) +
                        (0.05 * parseFloat(player.Positioning)) +
                        (0.05 * parseFloat(player.Stamina)) +
                        (0.05 * parseFloat(player.Strength)) +
                        (0.05 * parseFloat(player.Tactics)) +
                        (0.05 * parseFloat(player.Team_work)) +
                        (0.05 * parseFloat(player.Technique))))
                    // AVG_Right_Defender.push(player_rating.surname, temp_AMC);
                    AVG_Right_Defender.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })





            Player_rating_Right_Defender.push(temp);

        })


        //avg statistics training for right defender
        filtered_by_position_Right_Defender.map((player_rating) => {

            AVG_Right_Defender_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 5;
                    AVG_Right_Defender_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })






        //avg statistics for right defender Match

        filtered_by_position_Right_Defender.map((player_rating) => {

            AVG_Right_Defender_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Right_Defender_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Right_Defender_Match.push(parseFloat(temp_FOR));
                    AVG_Right_Defender_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })
















        //avg statistics for left defender

        filtered_by_position_Left_Defender.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = ((0.05 * parseFloat(player.Agility)) +
                        (0.05 * parseFloat(player.Communication)) +
                        (0.1 * parseFloat(player.Crossing)) +
                        (0.05 * parseFloat(player.Experience)) +
                        (0.1 * parseFloat(player.Going_forward)) +
                        (0.05 * parseFloat(player.Leadership)) +
                        (0.1 * parseFloat(player.Marking)) +
                        (0.1 * parseFloat(player.Pace)) +
                        (0.05 * parseFloat(player.Passing)) +
                        (0.05 * parseFloat(player.Personality)) +
                        (0.05 * parseFloat(player.Positioning)) +
                        (0.05 * parseFloat(player.Stamina)) +
                        (0.05 * parseFloat(player.Strength)) +
                        (0.05 * parseFloat(player.Tactics)) +
                        (0.05 * parseFloat(player.Team_work)) +
                        (0.05 * parseFloat(player.Technique)))
                    AVG_Left_Defender.push({ id: player_rating.surname, rating: temp_AMC })

                    return player;
                }
            })



        })

        //avg statistics training for left defender
        filtered_by_position_Left_Defender.map((player_rating) => {

            AVG_Left_Defender_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 5;
                    AVG_Left_Defender_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })








        //avg statistics for left defender Match

        filtered_by_position_Left_Defender.map((player_rating) => {

            AVG_Left_Defender_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Left_Defender_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    temp_FOR = temp_FOR / 2;
                    // AVG_Left_Defender_Match.push(parseFloat(temp_FOR));
                    AVG_Left_Defender_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })





















        //avg statistics for central defender


        filtered_by_position_Central_Defender.map((player_rating) => {

            const temp = arrayplayersRating.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = (
                        ((0.1 * parseFloat(player.Aerial_ability)) +
                            (0.05 * parseFloat(player.Agility)) +
                            (0.05 * parseFloat(player.Communication)) +
                            (0.05 * parseFloat(player.Experience)) +
                            (0.1 * parseFloat(player.Leadership)) +
                            (0.1 * parseFloat(player.Marking)) +
                            (0.025 * parseFloat(player.Pace)) +
                            (0.025 * parseFloat(player.Passing)) +
                            (0.05 * parseFloat(player.Personality)) +
                            (0.1 * parseFloat(player.Positioning)) +
                            (0.025 * parseFloat(player.Stamina)) +
                            (0.1 * parseFloat(player.Strength)) +
                            (0.05 * parseFloat(player.Tactics)) +
                            (0.1 * parseFloat(player.Tackling)) +
                            (0.05 * parseFloat(player.Team_work)) +
                            (0.025 * parseFloat(player.Technique))))
                    AVG_Central_Defender.push({ id: player_rating.surname, rating: temp_AMC })
                    return player;
                }
            })



        })


        //avg statistics training for Central defender
        filtered_by_position_Central_Defender.map((player_rating) => {


            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 5;
                    AVG_Central_Defender_training.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })

        })



        //avg statistics for Central defender Match

        filtered_by_position_Central_Defender.map((player_rating) => {


            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Central_Defender_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));
                    // AVG_Central_Defender_Match.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 2;
                    AVG_Central_Defender_Match.push({ id: player_rating.surname, rating: temp_FOR })

                    return player;
                }
            })


        })












        //avg statistics for goalkeeper

        filtered_by_position_Goalkeeper.map((player_rating) => {




            const temp = arrayplayersRating.find((player) => {


                if (player.name === player_rating.name && player.surname === player_rating.surname) {

                    temp_AMC = (
                        (0.05 * (parseFloat(player.Agility)) +
                            (0.05 * parseFloat(player.Communication)) +
                            (0.05 * parseFloat(player.Experience)) +
                            (0.05 * parseFloat(player.Leadership)) +
                            (0.05 * parseFloat(player.Kicking)) +
                            (0.1 * parseFloat(player.One_on_ones)) +
                            (0.1 * parseFloat(player.Penalty_saving)) +
                            (0.05 * parseFloat(player.Personality)) +
                            (0.1 * parseFloat(player.Positioning)) +
                            (0.1 * parseFloat(player.Rushing_out)) +
                            (0.1 * parseFloat(player.Shot_stopping)) +
                            (0.1 * parseFloat(player.Reflexes)) +
                            (0.05 * parseFloat(player.Tactics)) +
                            (0.05 * parseFloat(player.Team_work))
                        ))
                    // AVG_Goalkeeper.push(player_rating.surname, temp_AMC);
                    AVG_Goalkeeper.push({ id: player_rating.surname, rating: temp_AMC })


                }


            })


        })



        //avg statistics training for Central defender
        filtered_by_position_Goalkeeper.map((player_rating) => {


            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);

                    // AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);

                    // AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);

                    // AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);

                    // AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    // AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 5;
                    AVG_Goalkeeper_training.push({ id: player_rating.surname, rating: temp_FOR })
                    return player;
                }
            })

        })











        //avg statistics for Goalkeeper Match

        filtered_by_position_Goalkeeper.map((player_rating) => {


            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    // AVG_Goalkeeper_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR += (parseFloat(player.Rating));

                    // AVG_Goalkeeper_Match.push(parseFloat(temp_FOR));
                    temp_FOR = temp_FOR / 2;
                    AVG_Goalkeeper_Match.push({ id: player_rating.surname, rating: temp_FOR })
                    return player;
                }
            })


        })








        console.log("Rating forwards");
        console.log(AVG_Forward);

        console.log(" training  forwards");
        console.log(AVG_Forward_training);

        console.log("match   forwards")
        console.log(AVG_Forward_Match);






        console.log("Rating AMC");

        console.log(AVG_Att_Mid_Center);

        console.log(" training AMC ");

        console.log(AVG_Att_Mid_Center_training);

        console.log("match   AMC")

        console.log(AVG_Att_Mid_Center_Match);











        console.log("Rating AMR");
        console.log(AVG_Att_Mid_Right);

        console.log(" training  AMR");
        console.log(AVG_Att_Mid_Right_training);

        console.log("match   AMR")
        console.log(AVG_Att_Mid_Right_Match);







        console.log("Rating AML");
        console.log(AVG_Att_Mid_Left);

        console.log(" training  AML");
        console.log(AVG_Att_Mid_Left_training);

        console.log("match  AML ")
        console.log(AVG_Att_Mid_Left_Match);








        console.log("Rating Midfielder");
        console.log(AVG_Midfielder);

        console.log(" training  Midfielder");
        console.log(AVG_Midfielder_training);

        console.log("match Midfielder ")
        console.log(AVG_Midfielder_Match);











        console.log("Rating Right_Defender");
        console.log(AVG_Right_Defender);

        console.log(" training Right_Defender ");
        console.log(AVG_Right_Defender_training);

        console.log("match   Right_Defender")
        console.log(AVG_Right_Defender_Match);









        console.log("Rating Left_Defender");
        console.log(AVG_Left_Defender);

        console.log(" training Left_Defender ");
        console.log(AVG_Left_Defender_training);

        console.log("match   Left_Defender")
        console.log(AVG_Left_Defender_Match);





        console.log("Rating Central_Defender");
        console.log(AVG_Central_Defender);

        console.log(" training  Central_Defender");
        console.log(AVG_Central_Defender_training);

        console.log("match  Central_Defender ")
        console.log(AVG_Central_Defender_Match);













        console.log("Rating Goalkeeper");
        console.log(AVG_Goalkeeper);

        console.log(" training  Goalkeeper");
        console.log(AVG_Goalkeeper_training);

        console.log("match  Goalkeeper ")
        console.log(AVG_Goalkeeper_Match);








        var Suggest_Goallkeeper = [];
        var Suggest_Central_Defender = [];
        var Suggest_Right_Defender = [];
        var Suggest_Left_Defender = [];
        var Suggest_Midfielder = [];
        var Suggest_AMC = [];
        var Suggest_AMR = [];
        var Suggest_AML = [];
        var Suggest_FOR = [];



        const temp10 = AVG_Goalkeeper.map((player1) => {
            const temp10 = AVG_Goalkeeper_training.map((player2) => {
                const temp10 = AVG_Goalkeeper_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));
                        // AVG_Goalkeeper_Match.push(parseFloat(temp_FOR));
                        Suggest_Goallkeeper.push({ id: player1.id, rating: temp_FOR })

                    }

                })



            })
        })

        console.log("this is the final evaluation for goalkeepers:  ")
        console.log(Suggest_Goallkeeper);

        const temp12 = AVG_Central_Defender.map((player1) => {

            const temp12 = AVG_Central_Defender_training.map((player2) => {


                const temp12 = AVG_Central_Defender_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_Central_Defender.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of central defenders:  ")
        console.log(Suggest_Central_Defender);





        const temp13 = AVG_Right_Defender.map((player1) => {

            const temp13 = AVG_Right_Defender_training.map((player2) => {


                const temp13 = AVG_Right_Defender_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_Right_Defender.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of right defenders:  ")
        console.log(Suggest_Right_Defender);





        const temp14 = AVG_Left_Defender.map((player1) => {

            const temp14 = AVG_Left_Defender_training.map((player2) => {


                const temp14 = AVG_Left_Defender_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_Left_Defender.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of left defenders:  ")
        console.log(Suggest_Left_Defender);




        const temp15 = AVG_Midfielder.map((player1) => {

            const temp15 = AVG_Midfielder_training.map((player2) => {


                const temp15 = AVG_Midfielder_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_Midfielder.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of midfielders:  ")
        console.log(Suggest_Midfielder);









        const temp16 = AVG_Att_Mid_Center.map((player1) => {

            const temp16 = AVG_Att_Mid_Center_training.map((player2) => {


                const temp16 = AVG_Att_Mid_Center_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_AMC.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of att mid center:  ")
        console.log(Suggest_AMC);








        const temp17 = AVG_Att_Mid_Right.map((player1) => {


            const temp17 = AVG_Att_Mid_Right_training.map((player2) => {


                const temp17 = AVG_Att_Mid_Right_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_AMR.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of att mid right:  ")
        console.log(Suggest_AMR);







        const temp18 = AVG_Att_Mid_Left.map((player1) => {

            const temp18 = AVG_Att_Mid_Left_training.map((player2) => {


                const temp18 = AVG_Att_Mid_Left_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));
                        Suggest_AML.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of att mid left:  ")
        console.log(Suggest_AML);










        const temp19 = AVG_Forward.map((player1) => {

            const temp19 = AVG_Forward_training.map((player2) => {


                const temp19 = AVG_Forward_Match.map((player3) => {
                    if ((player1.id === player2.id) && (player1.id === player3.id)) {
                        temp_FOR = (parseFloat((0.6 * player1.rating) + (0.2 * player2.rating) + (0.2 * player3.rating)));


                        Suggest_FOR.push({ id: player2.id, rating: temp_FOR })

                    }
                })




            })
        })

        console.log("this is the final evaluation of forwards:  ")
        console.log(Suggest_FOR);




        var ratings = [];

        var best_Forward1;
        var best_Forward2;

        var best_AMC1;
        var best_AMC2;

        var best_AMR1;
        var best_AMR2;

        var best_AML1;
        var best_AML2;

        var best_Midfielder1;
        var best_Midfielder2;
        var best_Midfielder3;

        var best_Right_Defender1;
        var best_Right_Defender2;

        var best_Left_Defender1;
        var best_Left_Defender2;

        var best_Central_Defender1;
        var best_Central_Defender2;
        var best_Central_Defender3;

        var best_Goalkeeper1;
        var best_Goalkeeper2;



        var secondMax = function (arr) {
            var max = Math.max.apply(null, arr), // get the max of the array
                maxi = arr.indexOf(max);
            arr[maxi] = -Infinity; // replace max in the array with -infinity
            var secondMax = Math.max.apply(null, arr); // get the new max 
            arr[maxi] = max;
            return secondMax;
        };



        function thirdLargest(arr, arr_size) {
            /* There should be
            atleast three elements */
            if (arr_size < 3) {
                document.write(" Invalid Input ");
                return;
            }

            // Find first
            // largest element
            let first = arr[0];
            for (let i = 1;
                i < arr_size; i++)
                if (arr[i] > first)
                    first = arr[i];

            // Find second
            // largest element
            let second = Number.MIN_VALUE;
            for (let i = 0;
                i < arr_size; i++)
                if (arr[i] > second &&
                    arr[i] < first)
                    second = arr[i];

            // Find third
            // largest element
            let third = Number.MIN_VALUE;
            for (let i = 0;
                i < arr_size; i++)
                if (arr[i] > third &&
                    arr[i] < second)
                    third = arr[i];

            return third;
        }






        const findBestLineup = () => {

            //best forward
            Suggest_FOR.map((player) => {
                ratings.push(player.rating);
            })

            Suggest_FOR.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Forward1 = player.id;
                    setBest_for1(best_Forward1);

                }
            })
            Suggest_FOR.map((player) => {
                if (player.rating === (secondMax(ratings))) {
                    best_Forward2 = player.id;
                    setBest_for2(best_Forward2);

                }
            })



            //best att mid center
            ratings = [];
            Suggest_AMC.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_AMC.map((player) => {
                if (player.rating === (Math.max(...ratings))) {

                    best_AMC1 = player.id;
                    setBest_Att_Mid_Center1(best_AMC1);

                }
            })

            Suggest_AMC.map((player) => {
                if (player.rating === (secondMax(ratings))) {

                    best_AMC2 = player.id;
                    setBest_Att_Mid_Center2(best_AMC2);

                }
            })




            //best att mid right
            ratings = [];
            Suggest_AMR.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_AMR.map((player) => {
                if (player.rating === (Math.max(...ratings))) {

                    best_AMR1 = player.id;
                    setBest_Att_Mid_Right1(best_AMR1);

                }
            })

            Suggest_AMR.map((player) => {
                if (player.rating === (secondMax(ratings))) {

                    best_AMR2 = player.id;
                    setBest_Att_Mid_Right2(best_AMR2);

                }
            })




            //best att mid left
            ratings = [];
            Suggest_AML.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_AML.map((player) => {
                if (player.rating === (Math.max(...ratings))) {

                    best_AML1 = player.id;
                    setBest_Att_Mid_Left1(best_AML1);
                }
            })

            Suggest_AML.map((player) => {
                if (player.rating === (secondMax(ratings))) {

                    best_AML2 = player.id;
                    setBest_Att_Mid_Left2(best_AML2);
                }
            })



            //best midfielder
            ratings = [];
            Suggest_Midfielder.map((player) => {
                ratings.push(player.rating);
            })

            Suggest_Midfielder.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Midfielder1 = player.id;
                    setBest_Midfielder1(best_Midfielder1);

                }

            })
            Suggest_Midfielder.map((player) => {
                if (player.rating === (secondMax(ratings))) {
                    best_Midfielder2 = player.id;
                    setBest_Midfielder2(best_Midfielder2);

                }

            })

            Suggest_Midfielder.map((player) => {
                if (player.rating === (thirdLargest(ratings, ratings.length))) {
                    best_Midfielder3 = player.id;
                    setBest_Midfielder3(best_Midfielder3);

                }
            })








            //best central defender
            ratings = [];
            Suggest_Central_Defender.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_Central_Defender.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Central_Defender1 = player.id;
                    setBest_Central_Defender1(best_Central_Defender1);

                }
            })


            Suggest_Central_Defender.map((player) => {
                if (player.rating === (secondMax(ratings))) {

                    best_Central_Defender2 = player.id;
                    setBest_Central_Defender2(best_Central_Defender2);

                }
            })

            Suggest_Central_Defender.map((player) => {
                if (player.rating === (thirdLargest(ratings, ratings.length))) {

                    best_Central_Defender3 = player.id;
                    setBest_Central_Defender3(best_Central_Defender3);

                }
            })







            //best right defender
            ratings = [];
            Suggest_Right_Defender.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_Right_Defender.map((player) => {
                if (player.rating === (Math.max(...ratings))) {

                    best_Right_Defender1 = player.id;
                    setBest_Right_Defender1(best_Right_Defender1);

                }
            })
            Suggest_Right_Defender.map((player) => {
                if (player.rating === (secondMax(ratings))) {

                    best_Right_Defender2 = player.id;
                    setBest_Right_Defender2(best_Right_Defender2);

                }
            })



            //best left defender
            ratings = [];
            Suggest_Left_Defender.map((player) => {
                ratings.push(player.rating);
            })


            Suggest_Left_Defender.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Left_Defender1 = player.id;
                    setBest_Left_Defender1(best_Left_Defender1);

                }
            })

            Suggest_Left_Defender.map((player) => {
                if (player.rating === (secondMax(ratings))) {
                    best_Left_Defender2 = player.id;
                    setBest_Left_Defender2(best_Left_Defender2);

                }
            })





            //best goalkeeper
            ratings = [];
            Suggest_Goallkeeper.map((player) => {
                ratings.push(player.rating);
            })

            Suggest_Goallkeeper.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Goalkeeper1 = player.id;
                    setBest_Goalkeeper1(best_Goalkeeper1);
                }
            })


            Suggest_Goallkeeper.map((player) => {
                if (player.rating === (Math.max(...ratings))) {
                    best_Goalkeeper1 = player.id;
                    setBest_Goalkeeper1(best_Goalkeeper1);
                }
            })

            Suggest_Goallkeeper.map((player) => {
                if (player.rating === (secondMax(ratings))) {
                    best_Goalkeeper2 = player.id;
                    setBest_Goalkeeper2(best_Goalkeeper2);
                    console.log(best_Goalkeeper2)
                }

            })















        }

        findBestLineup();

        console.log("this is the best forward ")
        console.log(best_Forward1);

        console.log("this is the best AMC ")
        console.log(best_AMC1);

        console.log("this is the best AMR ")
        console.log(best_AMR1);

        console.log("this is the best AML")
        console.log(best_AML1);

        console.log("this is the best midfielder")
        console.log(best_Midfielder1);
        console.log("this is the second best midfielder")
        console.log(best_Midfielder2);

        console.log("this is the best central defender")
        console.log(best_Central_Defender1);
        console.log("this is the second best central defender")
        console.log(best_Central_Defender2);

        console.log("this is the best right defender")
        console.log(best_Right_Defender1);

        console.log("this is the best left defender")
        console.log(best_Left_Defender1);


        console.log("this is the best goalkeeper")
        console.log(best_Goalkeeper1);

        console.log("this is the second best goalkeeper")
        console.log(best_Goalkeeper1);
    }




    const [openModalInjured, setOpenModalInjured] = useState(false);


    return (
        <>

            {!openModalInjured &&
                <div className='container-fluid'>
                    <div className='col-12 space2'>

                    </div>


                    <div class="col-6 pitch">


                        <div class="top-box"></div>
                        <div class="centre-circle"></div>
                        <div class="centre-line"></div>
                        <div class="bottom-box"></div>

                        <div className='forward'>
                            <Player player={best_for1} />
                        </div>



                        <div className='Att_mid'>
                            <Player player={best_Att_Mid_Left1} />
                            <Player player={best_Att_Mid_Center1} />
                            <Player player={best_Att_Mid_Right1} />
                        </div>


                        <div className='midfielders'>
                            <Player player={best_Midfielder2} />
                            <Player player={best_Midfielder1} />
                        </div>


                        <div className='defenders'>
                            <Player player={best_Left_Defender1} />
                            <Player player={best_Central_Defender1} />
                            <Player player={best_Central_Defender2} />
                            <Player player={best_Right_Defender1} />
                        </div>



                        <div className='goalkeeper'>
                            <Player player={best_Goalkeeper1} />
                        </div>









                    </div>



                    <div class="col-6 bench">

                        <div className='row sub2'>
                            <div className='col-1'>

                            </div>
                            <div className='col-4 subs'>
                                <div>
                                    Subs
                                </div>
                            </div>



                        </div>


                        <div className='row sub2'>
                            <div className='col-3 sub2'>
                                <Player player={best_Goalkeeper2} />
                            </div>
                            <div className='col-3 sub2'>
                                <Player player={best_Att_Mid_Center2} />
                            </div>
                            <div className='col-3 button_sub'>
                                <button className='Suggested' onClick={suggested_lineup}>Suggested Lineup</button>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player player={best_Att_Mid_Left2} />
                            </div>
                            <div className='col-3 sub2'>
                                <Player player={best_Att_Mid_Right2} />
                            </div>
                            <div className='col-3 button_sub'>
                                <button className='Injuries' onClick={() => setOpenModalInjured(true)}>Injuries</button>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player player={best_for2} />
                            </div>
                            <div className='col-3 sub2'>
                                <Player player={best_Left_Defender2} />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player player={best_Right_Defender2} />
                            </div>
                            <div className='col-3 sub2'>
                                <Player player={best_Midfielder3} />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player player={best_Central_Defender3} />
                            </div>

                        </div>











                    </div>





                </div >
            }
            {openModalInjured && < ModalInjured closeModalInjured={setOpenModalInjured} />}

        </>
    );
};

