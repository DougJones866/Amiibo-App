<template>


<form v-on:submit.prevent="amiiboData">
            <p>Look for Amiibo</p>
            <ul>
                <li><label>Name <input v-model="amiiboCharacter" type="text" placeholder="Enter"></label></li>
            </ul>
            <button type="submit">Go</button>
 </form>

<transition-group name="fade" tag="div" appear>
        <AmiiboCard v-for="item in results.amiibo " :key="item.id" :name="item.name"></AmiiboCard>
</transition-group>



<div class="container">
  <header><h1>Gallery</h1></header>
  <main class="gallery">
    <figure>
      <img src="amiibo.image" :alt="amiibo.picture"/>
    </figure>
    </main>
 </div>   


</template>

