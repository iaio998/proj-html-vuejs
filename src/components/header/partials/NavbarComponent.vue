<template>
  <div class="row justify-content-between align-items-center">
    <div class="col-2">
      <h1>
        <div class="img-cont">
          <img src="/images/light-logo.png" alt="Logo" />
        </div>
      </h1>
    </div>
    <div class="col-10">
      <div class="d-flex justify-content-end align-items-center">
        <ul class="d-flex px-2">
          <li class="menu fs-5 mx-2 py-1" v-for="el in menu">
            {{ el.name }} <i class="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
        <ul class="d-flex px-2">
          <li class="px-3">
            <div id="shop-cont">
              <i class="fa-solid fa-cart-shopping position-relative">
                <div id="counter"><i>0</i></div>
              </i>
            </div>
          </li>
          <li class="px-3">
            <div id="user-cont">
              <i class="fa-regular fa-user"></i>
            </div>
          </li>
        </ul>
        <div class="d-flex input-cont">
          <input
            placeholder="Search..."
            type="text"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <button type="button">
            <i class="fw-bold fs-5 fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      menu: [
        {
          name: "Home",
          menuId: 1,
        },
        {
          name: "Pages",
          menuId: 2,
        },
        {
          name: "Courses",
          menuId: 3,
        },
        {
          name: "Features",
          menuId: 4,
        },
        {
          name: "Blog",
          menuId: 5,
        },
        {
          name: "Shop",
          menuId: 6,
        },
      ],
      fontAwesome: [
        {
          name: "shop",
          class: "fa-solid fa-cart-shopping",
          fAwesomeId: 1,
        },
        {
          name: "profile",
          class: "fa-regular fa-user",
          fAwesomeId: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/style/partials/variables" as *;
.menu {
  &:hover {
    border-bottom: 1px solid white;
  }
  .fa-chevron-down {
    font-size: 0.5em;
  }
}
#shop-cont {
  #counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border: 1px solid white;
    border-radius: 50%;
    line-height: 0.5em;
    position: absolute;
    top: -13px;
    left: 13px;
    color: $color-blue;
    background-color: white;
    i {
      transform: translate(-1px, 1px);
      font-size: 0.6em;
    }
  }
}
#user-cont {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-cont {
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  input {
    border: 0;
    padding: 12px 15px;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
  }
  button {
    border: 0;
    height: 50px;
    width: 50px;
    background-color: transparent;
    color: $color-marker;

    &:hover {
      background-color: $color-marker;
      color: white;
    }
  }
}
.img-cont {
  width: 150px;
  img {
    width: 100%;
  }
}
</style>
