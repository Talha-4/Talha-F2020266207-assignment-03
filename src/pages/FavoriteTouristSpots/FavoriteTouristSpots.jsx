import React from 'react'

const FavoriteTouristSpots = () => {
  return (
    <>
      <br /><br /><br />
      <div class="container">
        <h2 class="display-2">Favourite Tourist Spots</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="border p-3">
              <h3 class="text-center mb-3">SAWAT VALLEY</h3>
              <iframe width="332" height="249" src="https://www.youtube.com/embed/OUEmEoSCnFw"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <p>
                Swat Valley is a high-altitude tourist destination located in the northwest mountains
                of the Khyber Pakhtunkhwa province in Pakistan. The Swat Valley is situated on the swat river,
                at the coordinates of 35°12′N 72°29′E, which is at about 247 Km (153 Miles) distance from the
                capital city Islamabad in Pakistan.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="border p-3">
              <h3 class="text-center mb-3">PHANDER LAKE</h3>
              <iframe width="332" height="249" src="https://www.youtube.com/embed/mF30VIve9oc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <p>
                Phander Lake, located in Phander Village, is almost too good to be true. The teal-coloured lake sits
                silently amongst light-green trees befitting a landscape painting.
                Despite being insanely beautiful, Phander Lake doesn’t see anywhere as close to the number of
                tourists as the more popular Attabad Lake does.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="border p-2">
              <h3 class="text-center mb-3">HINGOL NATIONAL PARK</h3>
              <iframe width="332" height="249" src="https://www.youtube.com/embed/mHenjpgJd28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>
                Hingol National Park is technically in Pakistan, but it looks more like a Martian planet! The
                park is over 6,000-square-kilometres and contains incredibly unique rock formations, vast
                canyons, numerous animal species, and even a mud volcano.
                Part of the National Park hugs the coast, adding the ocean to all its other assets.
                Though totally out-of-this-world in its looks.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FavoriteTouristSpots