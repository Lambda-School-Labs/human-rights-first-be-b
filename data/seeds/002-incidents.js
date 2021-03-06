exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('incidents')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('incidents').insert([
        {
          incident_id: "mn-minneapolis-21",
          src: JSON.stringify([
            "https://youtu.be/XAa5xb6JitI?t=5982",
            "https://gfycat.com/distinctsecretgrasshopper-minneapolis-protest-police-acab"
          ]),
          categories: JSON.stringify([
            "baton",
            "beat",
            "strike"
          ]),
          city: "Minneapolis",
          state: "Minnesota",
          lat: 44.947865,
          long: -93.234886,
          title: "Police hit press in neck and head with wooden baton",
          desc: "A group of cops start to approach a group of press taking photos and video. One press member repeats \"we have our hands up and we have press passes\". An officer walking by points in the direction of a photographer and says something indiscernable. The camera pans to show a cop hitting the photographer in the neck and head with a wooden baton.",
          date: "2020-05-26T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: true,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "mn-minneapolis-14",
          src: JSON.stringify([
            "https://www.facebook.com/1462345700/posts/10220863688809651",
            "https://www.facebook.com/1462345700/posts/10220863812572745"
          ]),
          categories: JSON.stringify([
            "less-lethal",
            "rubber-bullet",
            "stun-grenade",
            "tear-gas"
          ]),
          city: "Minneapolis",
          state: "Minnesota",
          lat: 44.94811,
          long: -93.23699,
          title: "Police shoot flashbang grenades into crowd",
          desc: "Police on the rooftop of the 3rd precinct fire flashbang grenades into crowd of peaceful protesters.",
          date: "2020-05-26T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: true,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "mn-minneapolis-28",
          src: JSON.stringify([
            "https://www.facebook.com/damicedsota.thespiritflow/videos/10216865788705633/UzpfSTEwMDAxMTAzODkyNjEwMzpWSzoyNjczNDU4ODUyOTMzODE2/"
          ]),
          categories: JSON.stringify([
            "abuse-of-power",
            "arrest"
          ]),
          city: "Minneapolis",
          state: "Minnesota",
          lat: 44.941326,
          long: -93.26261,
          title: "Man has his gun confiscated in an open carry state, violating his 2nd amendment rights",
          desc: "Man encounters police arresting people open carrying (~3 minutes in), man is then also put in handcuffs (~5 minutes in) and his gun taken.",
          date: "2020-05-26T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: false,
          lethal_force: false,
          uncategorized: true
        },
        {
          incident_id: "co-denver-1",
          src: JSON.stringify([
            "https://www.denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/",
            "https://www.nytimes.com/2020/06/01/business/media/reporters-protests-george-floyd.html"
          ]),
          categories: JSON.stringify([
            "less-lethal",
            "pepper-ball",
            "shoot"
          ]),
          city: "Denver",
          state: "Colorado",
          lat: 39.73844,
          long: -104.98626,
          title: "Reporter shot with multiple pepper balls",
          desc: "He states the officer aimed at him, and the pepper balls broke his press badge and drew blood",
          date: "2020-05-28T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: true,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "ny-newyorkcity-55",
          src: JSON.stringify([
            "https://twitter.com/ShimonPro/status/1266136557871869952"
          ]),
          categories: JSON.stringify([
            "arrest",
            "baton",
            "grab",
            "shove",
            "strike"
          ]),
          city: "New York City",
          state: "New York",
          lat: 40.73655,
          long: -73.99114,
          title: "Police make violent arrests, officer breaks baton striking protester",
          desc: "Footage taken at Union Square and East 17th street shows multiple officers grabbing and shoving a protester to make an arrest. Another protester confronts an officer who strikes the protester in the legs with a baton. The baton snaps in two.",
          date: "2020-05-28T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: true,
          empty_hand_hard: false,
          less_lethal_methods: false,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "ny-newyorkcity-56",
          src: JSON.stringify([
            "https://twitter.com/NY1/status/1266159669262893057"
          ]),
          categories: JSON.stringify([
            "arrest",
            "grab",
            "push",
            "shove"
          ]),
          city: "New York City",
          state: "New York",
          lat: 40.736004,
          long: -73.99365,
          title: "Police make violent arrest at Union Square",
          desc: "Footage shows a woman arguing with a police officer at a protest near Union Square. The officer grabs her by the backpack and pulls her. Other protesters attempt to help and police intervene. Police then shove the crowd back and arrest the protester. Allegedly, 33 people were arrested at this scene.",
          date: "2020-05-28T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: true,
          empty_hand_hard: false,
          less_lethal_methods: false,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "ny-newyorkcity-2",
          src: JSON.stringify([
            "https://twitter.com/DriveWendys/status/1266555286678048770"
          ]),
          categories: JSON.stringify([
            "drive",
            "vehicle"
          ]),
          city: "New York City",
          state: "New York",
          lat: 0,
          long: 0,
          title: "Police drive by man and hit him with car door",
          desc: "Policeman deliberately opens car door to knock an individual down to the ground.",
          date: "2020-05-29T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: false,
          lethal_force: false,
          uncategorized: true
        },
        {
          incident_id: "ny-newyorkcity-1",
          src: JSON.stringify([
            "https://twitter.com/whitney_hu/status/1266540710188195843",
            "https://twitter.com/JasonLemon/status/1266529475757510656",
            "https://twitter.com/zayer_dounya/status/1266581597760831489",
            "https://twitter.com/AliVelshi/status/1269079615080890368",
            "https://www.democracynow.org/2020/6/15/dounya_zayer_nypd_attack"
          ]),
          categories: JSON.stringify([
            "shove",
            "throw"
          ]) ,
          city: "New York City",
          state: "New York",
          lat: 40.683964,
          long: -73.977295,
          title: "Police shove woman to the ground, inducing a seizure",
          desc: "Footage shows police using bikes to shove protesters on the sidewalk. One protester appears to be forced over a concrete divider by the chassis of a bike.\n\nWoman was sent to the ER due to seizure caused by policeman flinging her to the ground violently.\n\nThe NYP has suspended the officer involved.",
          date: "2020-05-29T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: true,
          less_lethal_methods: false,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "ca-sanjose-5",
          src: JSON.stringify([
            "https://www.youtube.com/watch?v=89mUHzu3480"
          ]),
          categories: JSON.stringify([
            "explosive",
            "less-lethal",
            "projectile",
            "rubber-bullet",
            "shoot"
          ]),
          city: "San Jose",
          state: "California",
          lat: 37.33532,
          long: -121.88931,
          title: "Man struck by rubber bullet and explosive device",
          desc: "A protester filming receives water bottles from a car and begins to distribute them. Without warning, police fire into the crowd. The man is hit and is helped by a second protester. While the second protester is attempting to help, a canister explodes at the man's feet.",
          date: "2020-05-29T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: true,
          lethal_force: false,
          uncategorized: false
        },
        {
          incident_id: "ca-losangeles-37",
          src: JSON.stringify([
            "https://vimeo.com/424352612",
            "https://www.reddit.com/r/LosAngeles/comments/gti4eg/la_riots_5292020_police_line_advances_with_their/"
          ]),
          categories: JSON.stringify([
            "gas",
            "less-lethal",
            "projectile",
            "shoot"
          ]),
          city: "Los Angeles",
          state: "California",
          lat: 34.04996,
          long: -118.25767,
          title: "Police use tear gas and riot rounds against protesters",
          desc: "In footage taken by a bystander filming from her apartment, police advance down a street near a Downtown LA shopping center. Protesters retreat from police. Police continuously fire less-lethal rounds and chemical agents at protesters. Towards the end of the footage, a single firework is thrown at police by protesters.",
          date: "2020-05-29T00:00:00.000Z",
          verbalization: false,
          empty_hand_soft: false,
          empty_hand_hard: false,
          less_lethal_methods: true,
          lethal_force: false,
          uncategorized: false
        },
      ]);
    });
};
