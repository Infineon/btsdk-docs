var group__wiced__bt__ble__battc__api__functions =
[
    [ "wiced_bt_ble_battc_connected_t", "structwiced__bt__ble__battc__connected__t.html", [
      [ "bdaddr", "structwiced__bt__ble__battc__connected__t.html#a17f123b687ff9e7b1ff6f55af5fe0865", null ],
      [ "handle", "structwiced__bt__ble__battc__connected__t.html#af242d6e3b6108ea75e1eb236e94c8240", null ],
      [ "notification", "structwiced__bt__ble__battc__connected__t.html#a9a099e1ffe82ca279fab6c3219516e2d", null ],
      [ "status", "structwiced__bt__ble__battc__connected__t.html#abf6c832c9d88c8a91fad0d08e52a3b3a", null ]
    ] ],
    [ "wiced_bt_ble_battc_disconnected_t", "structwiced__bt__ble__battc__disconnected__t.html", [
      [ "handle", "structwiced__bt__ble__battc__disconnected__t.html#af242d6e3b6108ea75e1eb236e94c8240", null ],
      [ "reason", "structwiced__bt__ble__battc__disconnected__t.html#a53a9e6e1b68d477c173d07e156ca4f7b", null ]
    ] ],
    [ "wiced_bt_ble_battc_gatt_char_t", "structwiced__bt__ble__battc__gatt__char__t.html", [
      [ "handle", "structwiced__bt__ble__battc__gatt__char__t.html#af242d6e3b6108ea75e1eb236e94c8240", null ],
      [ "properties", "structwiced__bt__ble__battc__gatt__char__t.html#ad55938872fd47086c38b264f22b0eb65", null ],
      [ "uuid16", "structwiced__bt__ble__battc__gatt__char__t.html#ae4ba2923b4d364d3472acf5ee2a7752c", null ],
      [ "val_handle", "structwiced__bt__ble__battc__gatt__char__t.html#a13d14e316098f34a69b6e4f3c29b9b3c", null ]
    ] ],
    [ "wiced_bt_ble_battc_gatt_cache_t", "structwiced__bt__ble__battc__gatt__cache__t.html", [
      [ "bdaddr", "structwiced__bt__ble__battc__gatt__cache__t.html#a17f123b687ff9e7b1ff6f55af5fe0865", null ],
      [ "characteristic", "structwiced__bt__ble__battc__gatt__cache__t.html#a22ac2c69b2546b6ec24d6d599af1e294", null ],
      [ "notification", "structwiced__bt__ble__battc__gatt__cache__t.html#a9a099e1ffe82ca279fab6c3219516e2d", null ]
    ] ],
    [ "wiced_bt_ble_battc_level_t", "structwiced__bt__ble__battc__level__t.html", [
      [ "handle", "structwiced__bt__ble__battc__level__t.html#af242d6e3b6108ea75e1eb236e94c8240", null ],
      [ "level", "structwiced__bt__ble__battc__level__t.html#abbb6c7c49508c1ac374683f2d1159e08", null ],
      [ "status", "structwiced__bt__ble__battc__level__t.html#abf6c832c9d88c8a91fad0d08e52a3b3a", null ]
    ] ],
    [ "wiced_bt_ble_battc_event_data_t", "unionwiced__bt__ble__battc__event__data__t.html", [
      [ "connected", "unionwiced__bt__ble__battc__event__data__t.html#a2c81c0e1a66b39ee0818af11b8c55b00", null ],
      [ "disconnected", "unionwiced__bt__ble__battc__event__data__t.html#a607f31ade31ca715743e8fc775b3002a", null ],
      [ "gatt_cache", "unionwiced__bt__ble__battc__event__data__t.html#ab728a0892f5dcdf635392be7a9f153ec", null ],
      [ "level", "unionwiced__bt__ble__battc__event__data__t.html#a2e29903c25085942ae07ac03e80e6c5c", null ]
    ] ],
    [ "WICED_BT_BLE_BATTC_DEV_MAX", "group__wiced__bt__ble__battc__api__functions.html#ga1ffbae92f1412d2cf2a62955749666ac", null ],
    [ "wiced_bt_ble_battc_cback_t", "group__wiced__bt__ble__battc__api__functions.html#gab0ba7a5bd5c0004ea36afa03b2622292", null ],
    [ "wiced_bt_ble_battc_event_t", "group__wiced__bt__ble__battc__api__functions.html#gaad50e770961be290672a811b55f15cd0", [
      [ "WICED_BT_BLE_BATTC_OPEN_EVT", "group__wiced__bt__ble__battc__api__functions.html#ggaad50e770961be290672a811b55f15cd0a8ede9a642b7ca5318dbe4e9cb1fd8599", null ],
      [ "WICED_BT_BLE_BATTC_CLOSE_EVT", "group__wiced__bt__ble__battc__api__functions.html#ggaad50e770961be290672a811b55f15cd0aefaa1a21fa4ec3a87c2649f7a6ddfb97", null ],
      [ "WICED_BT_BLE_BATTC_GATT_CACHE_EVT", "group__wiced__bt__ble__battc__api__functions.html#ggaad50e770961be290672a811b55f15cd0a01bd28c03b97ddf239c68b62869a86eb", null ],
      [ "WICED_BT_BLE_BATTC_LEVEL_EVT", "group__wiced__bt__ble__battc__api__functions.html#ggaad50e770961be290672a811b55f15cd0ad8b822a1ed09b03c0cde9baacd45a8d0", null ]
    ] ],
    [ "wiced_bt_ble_battc_status_t", "group__wiced__bt__ble__battc__api__functions.html#gab0b017bb286654605c15292614352e0a", [
      [ "WICED_BT_BLE_BATTC_STATUS_SUCCESS", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aab6646dcae177c4d88524e6cc98602621", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_UNSUPPORTED", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aa1365a94f9ccb66d573c7b134e534c9cf", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_ERROR", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aac443b721e01aea07421289553af8b26d", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_GATT_ERROR", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aa9908bd25f0fa23af3dabf6ad6e9061d6", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_INVALID_PARAM", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aa185d93d2c3f2dad04617f2180e36a0f1", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_MEM_FULL", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aa386f83ea2114eed62f29474e21c8218d", null ],
      [ "WICED_BT_BLE_BATTC_STATUS_CONNECTION_FAILED", "group__wiced__bt__ble__battc__api__functions.html#ggab0b017bb286654605c15292614352e0aa28bad9abd33c52fe7158e6ca83dbf2ec", null ]
    ] ],
    [ "wiced_bt_ble_battc_add", "group__wiced__bt__ble__battc__api__functions.html#ga7ecde8675244155d61274860cec6c427", null ],
    [ "wiced_bt_ble_battc_connect", "group__wiced__bt__ble__battc__api__functions.html#gaf10d2c3055c7100b0dec0301d6cbe8a6", null ],
    [ "wiced_bt_ble_battc_disconnect", "group__wiced__bt__ble__battc__api__functions.html#ga12d82355875934157789418055e9c44b", null ],
    [ "wiced_bt_ble_battc_encryption_changed", "group__wiced__bt__ble__battc__api__functions.html#gaee28d029a9dd5202180ca0d784bb67d4", null ],
    [ "wiced_bt_ble_battc_init", "group__wiced__bt__ble__battc__api__functions.html#gad8bbec9427e9853d071c8a8b5680d834", null ],
    [ "wiced_bt_ble_battc_read", "group__wiced__bt__ble__battc__api__functions.html#ga80171b048bcba95da48f273f7f5766a0", null ],
    [ "wiced_bt_ble_battc_remove", "group__wiced__bt__ble__battc__api__functions.html#ga26eeaef0bdb7ca722cbe2b2fa00648ee", null ]
];