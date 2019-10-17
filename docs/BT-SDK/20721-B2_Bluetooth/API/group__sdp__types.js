var group__sdp__types =
[
    [ "wiced_bt_sdp_discovery_attribute_value_t", "structwiced__bt__sdp__discovery__attribute__value__t.html", [
      [ "array", "structwiced__bt__sdp__discovery__attribute__value__t.html#a698e7a1cc91c377532b021018e74eac8", null ],
      [ "p_sub_attr", "structwiced__bt__sdp__discovery__attribute__value__t.html#a628da10559e27d94342974716ad41f9b", null ],
      [ "u16", "structwiced__bt__sdp__discovery__attribute__value__t.html#a1234f83efa812e259523c91799614a3c", null ],
      [ "u32", "structwiced__bt__sdp__discovery__attribute__value__t.html#ae65af0c4a8ee050043fe4b575f0a26a0", null ],
      [ "u8", "structwiced__bt__sdp__discovery__attribute__value__t.html#a0084c9e8c5778849f41d9de5df9c0f85", null ],
      [ "v", "structwiced__bt__sdp__discovery__attribute__value__t.html#a86566dab37f2bf628b957542e05125d2", null ]
    ] ],
    [ "t_sdp_discovery_attr", "structt__sdp__discovery__attr.html", [
      [ "attr_id", "structt__sdp__discovery__attr.html#a053b4598639c7c831339102ef75658f9", null ],
      [ "attr_len_type", "structt__sdp__discovery__attr.html#a2b5140ed9236bf781035786d60dd5049", null ],
      [ "attr_value", "structt__sdp__discovery__attr.html#a8f1fc0dac1e73438bfe520eee92010f6", null ],
      [ "p_next_attr", "structt__sdp__discovery__attr.html#a906d27139997e3b115ef6d75d000a6e6", null ]
    ] ],
    [ "sdp_discovery_record_t", "structsdp__discovery__record__t.html", [
      [ "p_first_attr", "structsdp__discovery__record__t.html#aea968908d09c62d7f67b9a8bb5669d8a", null ],
      [ "p_next_rec", "structsdp__discovery__record__t.html#a169b98fd70f62d993c50c7dc62568534", null ],
      [ "remote_bd_addr", "structsdp__discovery__record__t.html#a1d7324bb1e473b629b3ffaf7c38c7f98", null ],
      [ "time_read", "structsdp__discovery__record__t.html#a9c8ca6d17cdea649d04bd2b5fa7f1e38", null ]
    ] ],
    [ "wiced_bt_sdp_discovery_db_t", "structwiced__bt__sdp__discovery__db__t.html", [
      [ "attr_filters", "structwiced__bt__sdp__discovery__db__t.html#ab7180870686cdd8f032c68f3e64861e6", null ],
      [ "mem_free", "structwiced__bt__sdp__discovery__db__t.html#a018ca54b4009ff9bf2dce3333d3d2b56", null ],
      [ "mem_size", "structwiced__bt__sdp__discovery__db__t.html#a3f6a3b0b58cbdacf4ce9a0c9b3d64794", null ],
      [ "num_attr_filters", "structwiced__bt__sdp__discovery__db__t.html#a8ec595ae7017a68b48e4e24bbc3ac7da", null ],
      [ "num_uuid_filters", "structwiced__bt__sdp__discovery__db__t.html#a384e3670164bc5c5e13fbf01595bddc4", null ],
      [ "p_first_rec", "structwiced__bt__sdp__discovery__db__t.html#aa1462d517bdb485f047db39080a89ca8", null ],
      [ "p_free_mem", "structwiced__bt__sdp__discovery__db__t.html#ae5bc38788f166c6919fe4970a61a7748", null ],
      [ "uid_filters", "structwiced__bt__sdp__discovery__db__t.html#ae9ecdb913c8c13775462c1dc4b86c1b9", null ]
    ] ],
    [ "wiced_bt_sdp_protocol_elem_t", "structwiced__bt__sdp__protocol__elem__t.html", [
      [ "num_params", "structwiced__bt__sdp__protocol__elem__t.html#a390ce228ed343cb6fa7f56c8687b61ea", null ],
      [ "params", "structwiced__bt__sdp__protocol__elem__t.html#a0c716cd13fa0b81e9379a4d47ea489a3", null ],
      [ "protocol_uuid", "structwiced__bt__sdp__protocol__elem__t.html#ac9db2ce6b83a837aaf7063aaaba1076a", null ]
    ] ],
    [ "wiced_bt_sdp_discovery_attribute_t", "group__sdp__types.html#ga744cc6587780ea0ddcaeff6856947718", null ],
    [ "wiced_bt_sdp_discovery_complete_cback_t", "group__sdp__types.html#gaa114f7754b2ec63a642f1d9814a73cc5", null ],
    [ "wiced_bt_sdp_discovery_record_t", "group__sdp__types.html#ga96bc6795aa555951b4c30ea869a1439f", null ],
    [ "wiced_bt_sdp_result_t", "group__sdp__types.html#ga93c6f8c9d0b76ab42e67a9f2d0dec328", [
      [ "WICED_BT_SDP_SUCCESS", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a8977101f17e1245da9a2704c32ad53a4", null ],
      [ "WICED_BT_SDP_INVALID_VERSION", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328af6a1304636c94964b376a41ef8e45f4b", null ],
      [ "WICED_BT_SDP_INVALID_SERV_REC_HDL", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a226a15886664ae9e82185e78b2709e8d", null ],
      [ "WICED_BT_SDP_INVALID_REQ_SYNTAX", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a3a85d487ecbcbcca35b3223ecfa8ba4a", null ],
      [ "WICED_BT_SDP_INVALID_PDU_SIZE", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a42043463c14a7aed815f64872f8e45ae", null ],
      [ "WICED_BT_SDP_INVALID_CONT_STATE", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328aea759acbfcda6995c073834aadc99d6f", null ],
      [ "WICED_BT_SDP_NO_RESOURCES", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a2ecbb604d4a0ab697e4f8098ca79a5eb", null ],
      [ "WICED_BT_SDP_DI_REG_FAILED", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328afca7615cbd8494de228cfb3307beb0aa", null ],
      [ "WICED_BT_SDP_DI_DISC_FAILED", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a3c2252d8f8f285126f416b054fec96ca", null ],
      [ "WICED_BT_SDP_NO_DI_RECORD_FOUND", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a2beb4c28604bac144ee0e9d0b2f84fed", null ],
      [ "WICED_BT_SDP_ERR_ATTR_NOT_PRESENT", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328ac850191f4fde0f346f9fc912422c12dd", null ],
      [ "WICED_BT_SDP_ILLEGAL_PARAMETER", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a5225888457294a62a236e1abe0caa87e", null ],
      [ "WICED_BT_SDP_NO_RECS_MATCH", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328abecee3babd4dc41c85cb6546aa09c815", null ],
      [ "WICED_BT_SDP_CONN_FAILED", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a0112e9137a7447efcbfa03eeb7e31a49", null ],
      [ "WICED_BT_SDP_CFG_FAILED", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a0e441205b20cc13da23016c9ecaed01e", null ],
      [ "WICED_BT_SDP_GENERIC_ERROR", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328ab5275ca69704e416c23b749727bf464d", null ],
      [ "WICED_BT_SDP_DB_FULL", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328aadb073e6f55f7d242db1ed87adb19ebd", null ],
      [ "WICED_BT_SDP_INVALID_PDU", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328afe04ba215c6a61815af71ef66df89e81", null ],
      [ "WICED_BT_SDP_SECURITY_ERR", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328add80cbd5972c24ca74fca2a7c96efcdb", null ],
      [ "WICED_BT_SDP_CONN_REJECTED", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328a88fa3c55a0f7b6888a51dba22ac31ad6", null ],
      [ "WICED_BT_SDP_CANCEL", "group__sdp__types.html#gga93c6f8c9d0b76ab42e67a9f2d0dec328ad9deb32630ad1d082962cd4a3684e9a0", null ]
    ] ]
];