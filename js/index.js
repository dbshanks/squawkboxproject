$(() => {

    // Initialize Animate on Scroll
    AOS.init();

    // Start Object Arrays to populate Promo Card & Squawk Examples
    let promotionalSquawks = [{
            delay: '100',
            user: "sgallaway0",
            words: "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque"
        },
        {
            delay: '200',
            user: "tchurchyard1",
            words: "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in"
        },
        {
            delay: '300',
            user: "hjudkin2",
            words: "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl"
        }
    ];

    let squawkPrice = [{
            delay: '100',
            title: 'Starter',
            price: 'Always Free',
            package: 'PipSquawk',
            description: 'You only squawk a little bit, keep a small circle of likeminded squeekers, if you find more to squeek you can always upgrade'
        },
        {
            delay: '200',
            title: 'Mid-Tier',
            price: '$5.99 /mth',
            package: 'BruteSquawk',
            description: 'You are a little more squawkative, like throwing your squawks around, as always, if you find more to squeek about you can always upgrade'

        },
        {
            delay: '300',
            title: 'Pro-Tier',
            price: '$7.99 /mth',
            package: 'BigSquawk',
            description: 'You always have to have the last squawk, keep a large circle of other squeekers and influence trends and news events, if you find more to squeek about you can always upgrade'

        },
        {
            delay: '400',
            title: 'Enterprise',
            price: '$12.99 /mth',
            package: 'HeadSqueek',
            description: 'The loudest on the squawk box, no squawk goes unnoticed, you like to keep all of the squeeker tiers in check. We doubt you could find more to squeek about at this point'

        },
    ];

    // Price Card Array Map
    squawkPrice.map((item) => {
        $('#squawk-price-cards').append(`
            <div class="col-12 col-lg-3 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="${item.delay}">
                <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
                    <div class="card-header">${item.title} | ${item.price}</div>
                    <div class="card-body">
                        <h4 class="card-title">${item.package}</h4>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>
        
        `)
    });


    // Squawk examples Array Map
    promotionalSquawks.map((squawk) => {
        $('#squawk-box').append(`
            <div class="col-12 col-md-4 col-lg-4">
                <blockquote class="blockquote" data-aos="fade-up" data-aos-delay="${squawk.delay}">
                    <p class="mb-0"> ${squawk.words}</p> 
                    <footer class="blockquote-footer" > Someone famous in 
                         <cite title="Source Title" class="text-danger"> 
                            @ ${squawk.user} 
                        </cite> 
                    </footer> 
                </blockquote> 
             </div> 
        `);
    });

    // Ajax API call to populate dummy user images.
    let $image = $('#user-image');

    $.ajax({
        url: 'https://randomuser.me/api/?results=54',
        dataType: 'json',
        success: function (data) {

            // Generate increasing numbers to stagger the image delay used by Animate on Scroll
            let arr = []
            for (let i = 0; i < 54; i++) {
                arr.push(Math.floor(i * 50))
            }

            // Isolating the User Image portion of the API
            for (let i = 0; i < 54; i++) {
                $image.append(`<img class="circle-thumbnail" src="${data.results[i].picture['medium']}" data-aos="fade-up" data-aos-delay="${arr[i]}"/>`)
            }
        }
    });

    // Signup / Registration 
    let signups = []

    $('form').on('submit', (event) => {
        event.preventDefault();

        let signup = {
            handle: $('#InputHandle').val(),
            fullname: $('#InputFullname').val(),
            email: $('#InputEmail').val(),
            password: $('#InputPassword').val(),
            bio: $('#InputBio').val()
        };

        signups.push(signup);

        signups.map((signup) => {
            $('#signup-confirmation').html(`

            <div class="card text-white bg-danger mb-3 mt-5" id="confirmation-card" style="max-width: 40rem">
               <div class="card-header"> 
                 <h3>
                    Confirm Registration
                 </h3> 
               </div>

                <div class="card-body">
                    <h4 class="card-title">@${signup.handle}</h4> 
                        <h4>${signup.fullname}</h4>
                        <p class="card-text"> ${signup.email} </p>
                        <p class="card-text"> 
                            ${signup.bio}
                        </p> 
                    </div> 
                <button type="submit" class="btn btn-primary btn-lg btn-block"> Confirm </button>
                </div>
            </div>           
         `);
        }).join('');

        // Reset the form.
        $('#form-input').trigger("reset");

        // Handle the confirmation modal close
        $('#confirmation-card').click(() => {
            $('#confirmation-card').hide();
        });
    });



});