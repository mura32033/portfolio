<template>
    <div :class="{itemHover: isHovered}" @mouseover="hoverin" @mouseleave="hoverout" @click="show(item.id)">
        <div class="cardContent">
            <div class="cardInfo">
                <h3>{{item.general.title}}</h3>
                <span v-for="(t, index) in item.general.tags" :key="index" :class="t.class">タグ: {{t.name}}</span>
            </div>
            <p>{{item.general.shortDesc}}</p>
        </div>
        <modal
            :name="item.id"
            :adaptive="true"
            :scrollable="true"
            width="50%"
            height=auto>
            <works-item :works="item" />
        </modal>
    </div>
</template>

<script>
import worksItem from './worksItem.vue'
export default {
  components: { worksItem },
    data() {
        return{
            isHovered: false
        }
    },
    props: {
        item: Object
    },
    methods: {
        hoverin() {
            this.isHovered = true
        },
        hoverout() {
            this.isHovered = false
        },
        show(id) {
            this.$modal.show(id)
        },
        hide(id) {
            this.$modal.hide(id)
        }
    }
}
</script>

<style lang="scss">
.itemHover {
    box-shadow: 1px 2px 11px -8px rgba(51, 51, 51, .7);
}
.cardContent {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    width: 100%;
    .cardInfo {
        padding-bottom: 1rem;
        > span {
            font-size: .8rem;
            display: block;
            text-align: right;
        }
    }
    > p {
        margin-top: auto;
    }
}
</style>