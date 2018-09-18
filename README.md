# my_website

This is the github for my personal website. I will update it in the future with new features and maybe some design changes as I begin to have more free time.
Thank you for visiting my site!

sheepinav.github.io

<FlexView column basis='20%'>
  <FlexView row="true" hAlignContent="center">
    <a href="http://susa.berkeley.edu">
      <img src={SUSA} id="SUSAlogo" alt=""></img>
    </a>
  </FlexView>
  <FlexView row="true" basis='30%'></FlexView>
  <FlexView row="true" hAlignContent='center'>
    <a href="http://functionalfoodscenter.net/">
      <img src={FFC} id="FFClogo" alt=""></img>
    </a>
  </FlexView>
</FlexView>
<FlexView column basis='30%' vAlignContent='center'>
  <FlexView row="true" basis='10%'></FlexView>
  <FlexView row="true" hAlignContent='center' >
    <h3>Statistics Undergraduate Student Association</h3>
  </FlexView>
  <FlexView row="true" hAlignContent='center' >
    Web Development Co-Director
  </FlexView>
  <FlexView row="true" hAlignContent='center'>
    <i>April 2018 - Present</i>
  </FlexView>
  <FlexView row="true" basis='40%'></FlexView>
  <FlexView row="true" hAlignContent='center'>
    <h3>Functional Food Center</h3>
  </FlexView>
  <FlexView row="true" hAlignContent='center'>
    Web Development and Design Intern
  </FlexView>
  <FlexView row="true" hAlignContent='center'>
    <i>June 2018 - August 2018</i>
  </FlexView>
</FlexView>
<FlexView column basis='10%'></FlexView>

$( document ).ready(function() {
    var heights = $("#FFC").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".price-box").height(maxHeight);
});
