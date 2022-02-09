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

                    temp_FOR = ((parseFloat(player.Aerial_ability) + parseFloat(player.Agility) + parseFloat(player.Communication) +
                        parseFloat(player.Composure) + parseFloat(player.Dribbling) + parseFloat(player.Experience) +
                        parseFloat(player.Finishing) + parseFloat(player.Leadership) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                        parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Shots) + parseFloat(player.Stamina) +
                        parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                        + parseFloat(player.Technique)) / 18)
                    AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
                    return player;
                }
            })


            Player_rating_Forward.push(temp);

        })


        //avg statistics for forwards training

        filtered_by_position_Forward.map((player_rating) => {

            AVG_Forward_training.push(player_rating.surname);

            const temp1 = arrayPlayerTrainingRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    AVG_Forward_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerTrainingRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    AVG_Forward_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp3 = arrayPlayerTrainingRating3.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    AVG_Forward_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp4 = arrayPlayerTrainingRating4.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    AVG_Forward_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp5 = arrayPlayerTrainingRating5.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                    AVG_Forward_training.push(parseFloat(temp_FOR));
                    return player;
                }
            })

        })






        //avg statistics for forwards Match

        filtered_by_position_Forward.map((player_rating) => {

            AVG_Forward_Match.push(player_rating.surname);

            const temp1 = arrayPlayerMatchRating1.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    AVG_Forward_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })
            const temp2 = arrayPlayerMatchRating2.find((player) => {

                if (player.name === player_rating.name && player.surname === player_rating.surname) {
                    temp_FOR = (parseFloat(player.Rating));
                    AVG_Forward_Match.push(parseFloat(temp_FOR));
                    return player;
                }
            })

















            //avg statistics for att mid center
            filtered_by_position_Att_Mid_Center.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Through_balls) + parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Composure) + parseFloat(player.Dribbling) + parseFloat(player.Experience) +
                            parseFloat(player.Finishing) + parseFloat(player.Leadership) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                            parseFloat(player.Personality) + parseFloat(player.Crossing) + parseFloat(player.Shots) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Att_Mid_Center.push(player_rating.surname, temp_AMC);
                        return player;
                    }
                })


                Player_rating_Att_Mid_Center.push(temp);

            })


            //avg statistics training for att mid center
            filtered_by_position_Att_Mid_Center.map((player_rating) => {

                AVG_Att_Mid_Center_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Center_training.push(parseFloat(temp_FOR));
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
                        AVG_Att_Mid_Center_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Att_Mid_Center_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })
























            //avg statistics for att mid right

            filtered_by_position_Att_Mid_Right.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.One_on_ones) + parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Composure) + parseFloat(player.Dribbling) + parseFloat(player.Experience) +
                            parseFloat(player.Finishing) + parseFloat(player.Leadership) + parseFloat(player.Pace) + parseFloat(player.Aerial_ability) +
                            parseFloat(player.Personality) + parseFloat(player.Crossing) + parseFloat(player.Shots) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Att_Mid_Right.push(player_rating.surname, temp_AMC);
                        return player;
                    }
                })


                Player_rating_Att_Mid_Right.push(temp);

            })




            //avg statistics training for att mid Right
            filtered_by_position_Att_Mid_Right.map((player_rating) => {

                AVG_Att_Mid_Right_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Right_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })

            })








            //avg statistics for att mid right Match

            filtered_by_position_Att_Mid_Right.map((player_rating) => {

                AVG_Att_Mid_Right_Match.push(player_rating.surname);

                const temp1 = arrayPlayerMatchRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Att_Mid_Right_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Att_Mid_Right_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })




























            //avg statistics for att mid left

            filtered_by_position_Att_Mid_Left.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.One_on_ones) + parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Composure) + parseFloat(player.Dribbling) + parseFloat(player.Experience) +
                            parseFloat(player.Finishing) + parseFloat(player.Leadership) + parseFloat(player.Pace) + parseFloat(player.Aerial_ability) +
                            parseFloat(player.Personality) + parseFloat(player.Crossing) + parseFloat(player.Shots) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Att_Mid_Left.push(player_rating.surname, temp_AMC);
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
                        AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Att_Mid_Left_training.push(parseFloat(temp_FOR));
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
                        AVG_Att_Mid_Left_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Att_Mid_Left_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })



















            //avg statistics for midfielder

            filtered_by_position_Midfielder.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Aerial_ability) + parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Composure) + parseFloat(player.Creativity) + parseFloat(player.Experience) +
                            parseFloat(player.Leadership) + parseFloat(player.Marking) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                            parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Shots) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Midfielder.push(player_rating.surname, temp_AMC);
                        return player;
                    }
                })


                Player_rating_Midfielder.push(temp);

            })



            //avg statistics training for att mid Left
            filtered_by_position_Midfielder.map((player_rating) => {

                AVG_Midfielder_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Midfielder_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Midfielder_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Midfielder_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Midfielder_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Midfielder_training.push(parseFloat(temp_FOR));
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
                        AVG_Midfielder_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Midfielder_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })














            //avg statistics for right defender

            filtered_by_position_Right_Defender.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Crossing) + parseFloat(player.Experience) + parseFloat(player.Going_forward) +
                            parseFloat(player.Leadership) + parseFloat(player.Marking) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                            parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Right_Defender.push(player_rating.surname, temp_AMC);
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
                        AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Right_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Right_Defender_training.push(parseFloat(temp_FOR));
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
                        AVG_Right_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Right_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })
















            //avg statistics for left defender

            filtered_by_position_Left_Defender.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Agility) + parseFloat(player.Communication) +
                            parseFloat(player.Crossing) + parseFloat(player.Experience) + parseFloat(player.Going_forward) +
                            parseFloat(player.Leadership) + parseFloat(player.Marking) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                            parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Left_Defender.push(player_rating.surname, temp_AMC);
                        return player;
                    }
                })


                Player_rating_Left_Defender.push(temp);

            })

            //avg statistics training for left defender
            filtered_by_position_Left_Defender.map((player_rating) => {

                AVG_Left_Defender_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Left_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Left_Defender_training.push(parseFloat(temp_FOR));
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
                        AVG_Left_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Left_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })





















            //avg statistics for central defender


            filtered_by_position_Central_Defender.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Aerial_ability) + parseFloat(player.Agility) +
                            parseFloat(player.Communication) + parseFloat(player.Experience) + parseFloat(player.Leadership) +
                            parseFloat(player.Marking) + parseFloat(player.Pace) + parseFloat(player.Passing) +
                            parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Stamina) +
                            parseFloat(player.Strength) + parseFloat(player.Tactics) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                            + parseFloat(player.Technique)) / 18)
                        AVG_Central_Defender.push(player_rating.surname, temp_AMC);
                        return player;
                    }
                })


                Player_rating_Central_Defender.push(temp);

            })


            //avg statistics training for Central defender
            filtered_by_position_Central_Defender.map((player_rating) => {

                AVG_Central_Defender_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Central_Defender_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })

            })



            //avg statistics for Central defender Match

            filtered_by_position_Central_Defender.map((player_rating) => {

                AVG_Central_Defender_Match.push(player_rating.surname);

                const temp1 = arrayPlayerMatchRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Central_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Central_Defender_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })












            //avg statistics for goalkeeper

            filtered_by_position_Goalkeeper.map((player_rating) => {

                const temp = arrayplayersRating.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {

                        temp_AMC = ((parseFloat(player.Agility) +
                            parseFloat(player.Communication) + parseFloat(player.Experience) + parseFloat(player.Leadership) +
                            parseFloat(player.Kicking) + parseFloat(player.One_on_ones) + parseFloat(player.Penalty_saving) +
                            parseFloat(player.Personality) + parseFloat(player.Positioning) + parseFloat(player.Rushing_out) +
                            parseFloat(player.Shot_stopping) + parseFloat(player.Tactics) + parseFloat(player.Tactics) + parseFloat(player.Team_work)
                        ) / 18)
                        AVG_Goalkeeper.push(player_rating.surname, temp_AMC);
                    }
                })


                Player_rating_Goalkeeper.push(temp);

            })



            //avg statistics training for Central defender
            filtered_by_position_Goalkeeper.map((player_rating) => {

                AVG_Goalkeeper_training.push(player_rating.surname);

                const temp1 = arrayPlayerTrainingRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerTrainingRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp3 = arrayPlayerTrainingRating3.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp4 = arrayPlayerTrainingRating4.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp5 = arrayPlayerTrainingRating5.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = ((parseFloat(player.Behaviour) + parseFloat(player.Rating)) / 2);
                        AVG_Goalkeeper_training.push(parseFloat(temp_FOR));
                        return player;
                    }
                })

            })











            //avg statistics for Goalkeeper Match

            filtered_by_position_Goalkeeper.map((player_rating) => {

                AVG_Goalkeeper_Match.push(player_rating.surname);

                const temp1 = arrayPlayerMatchRating1.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Goalkeeper_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })
                const temp2 = arrayPlayerMatchRating2.find((player) => {

                    if (player.name === player_rating.name && player.surname === player_rating.surname) {
                        temp_FOR = (parseFloat(player.Rating));
                        AVG_Goalkeeper_Match.push(parseFloat(temp_FOR));
                        return player;
                    }
                })


            })





        })
        console.log("Rating " + AVG_Forward);

        console.log(" training  " + AVG_Forward_training);


        console.log("match   " + AVG_Forward_Match);

        console.log("Rating " + AVG_Att_Mid_Center);


        console.log(" training  " + AVG_Att_Mid_Center_training);


        console.log("match   " + AVG_Att_Mid_Center_Match);

        console.log("Rating " + AVG_Att_Mid_Right);


        console.log(" training  " + AVG_Att_Mid_Right_training);


        console.log("match   " + AVG_Att_Mid_Right_Match);

        console.log("Rating " + AVG_Att_Mid_Left);


        console.log(" training  " + AVG_Att_Mid_Left_training);

        console.log("match   " + AVG_Att_Mid_Left_Match);

        console.log("Rating " + AVG_Midfielder);


        console.log(" training  " + AVG_Midfielder_training);


        console.log("match   " + AVG_Midfielder_Match);

        console.log("Rating " + AVG_Right_Defender);


        console.log(" training  " + AVG_Right_Defender_training);

        console.log("match   " + AVG_Right_Defender_Match);

        console.log("Rating " + AVG_Left_Defender);


        console.log(" training  " + AVG_Left_Defender_training);


        console.log("match   " + AVG_Left_Defender_Match);

        console.log("Rating " + AVG_Central_Defender);


        console.log(" training  " + AVG_Central_Defender_training);


        console.log("match   " + AVG_Central_Defender_Match);


        console.log(" training  " + AVG_Goalkeeper_training);


        console.log("match   " + AVG_Goalkeeper_Match);

        console.log("Rating " + AVG_Goalkeeper);



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
                            <Player />
                        </div>



                        <div className='Att_mid'>
                            <Player />
                            <Player />
                            <Player />
                        </div>


                        <div className='midfielders'>
                            <Player />
                            <Player />
                        </div>


                        <div className='defenders'>
                            <Player />
                            <Player />
                            <Player />
                            <Player />
                        </div>



                        <div className='goalkeeper'>
                            <Player />
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
                                <Player />
                            </div>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>
                            <div className='col-3 button_sub'>
                                <button className='Suggested' onClick={suggested_lineup}>Suggested Lineup</button>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>
                            <div className='col-3 button_sub'>
                                <button className='Injuries' onClick={() => setOpenModalInjured(true)}>Injuries</button>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-3 sub2'>
                                <Player />
                            </div>

                        </div>











                    </div>





                </div >
            }
            {openModalInjured && < ModalInjured closeModalInjured={setOpenModalInjured} />}

        </>
    );
};

