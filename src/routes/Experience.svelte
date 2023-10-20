<script>
    import data from "../assets/experience.json"
    let sortedData = data.slice().sort((a, b) => b.id - a.id);
    // console.log(sortedData);
</script>

<section>
    <div class="section">
        <div class="section-name">
            <h3>Experience</h3>
        </div>
        <div class="section-content">
            <div class="row">
                {#each sortedData as rec}
                    <div class="col">
                        <h4>{rec.position}</h4>
                        <p class="info-class"><i>{rec.place}</i></p>
                        <p>{rec.period}</p>
                        <br>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    h3 {
        font-weight: 400;
        font-weight: bold;
    }

    h4, h5{
        font-weight: bold;
    }

    p {
        font-weight: 200;
        line-height: 1.8rem;
    }

    .info-class{
        line-height: 1px;
    }

    .section {
        margin-top: 14vh;
    }

    .section-content {
        display: inline-flex;
        /* float: right; */
        padding-left: 2rem;
        max-width: 80%;
    }

    .section-name {
        display: inline-flex;
        float: left;
        max-width: 20%;
        color: #f0ddbc;
    }

    @media (max-width: 480px) {
        .section-content {
            display: inline-block;
            max-width: 100%;
        }

        .section-name {
            display: inline-block;
            max-width: 100%;
            padding-left: 0rem;
        }
    }
</style>
