var wiced__platform__audio__common_8h =
[
    [ "platform_audio_side_t", "wiced__platform__audio__common_8h.html#a89e494f4d28ea050978846f284543241", null ],
    [ "platform_button_callback_t", "wiced__platform__audio__common_8h.html#a0da097e606cc0bfe1a3ca67f2ea12b18", null ],
    [ "platform_button_id_t", "wiced__platform__audio__common_8h.html#a2300208b6f4d575d5ff8200fd89d4df3", null ],
    [ "platform_charger_callback_t", "wiced__platform__audio__common_8h.html#af375c64c9205cf25eff9a64afe9e2914", null ],
    [ "platform_charger_event_t", "wiced__platform__audio__common_8h.html#aa1abde66fabc597ea9599c502a2892fd", null ],
    [ "platform_codec_route_t", "wiced__platform__audio__common_8h.html#a02c53f6a6e3a1aa21023efdd2acf45e8", null ],
    [ "platform_global_state_t", "wiced__platform__audio__common_8h.html#a116d6fbcf4ed354c7acec9ac47e704a9", null ],
    [ "platform_led_state_t", "wiced__platform__audio__common_8h.html#ab8a3692fd9d1fc5892ded0a3bfde060f", null ],
    [ "platform_audio_side", "wiced__platform__audio__common_8h.html#acdea7f9557bbb15af7a9a9af4ea23b19", [
      [ "PLATFORM_AUDIO_SIDE_LEFT", "wiced__platform__audio__common_8h.html#acdea7f9557bbb15af7a9a9af4ea23b19a2d4d3019c72467e4129b04a8f9dea097", null ],
      [ "PLATFORM_AUDIO_SIDE_RIGHT", "wiced__platform__audio__common_8h.html#acdea7f9557bbb15af7a9a9af4ea23b19a7702824a04b96c17f7171ef5614ac11f", null ]
    ] ],
    [ "platform_button_id", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9", [
      [ "PLATFORM_BUTTON_POWER_ON", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9aa3220ccd403f01fead53f8dc33acc5ed", null ],
      [ "PLATFORM_BUTTON_POWER_OFF", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9ab63ab2f9c8f2e389f246c73f8e7799fd", null ],
      [ "PLATFORM_BUTTON_PAIRING", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a0ab684e8c717ddf05a86087796d6023e", null ],
      [ "PLATFORM_BUTTON_VOLUME_UP", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a53e9da64fcdcdb61219c35f1ab6b6e42", null ],
      [ "PLATFORM_BUTTON_VOLUME_DOWN", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a02c33e671f550a45ddb1009a2a918c41", null ],
      [ "PLATFORM_BUTTON_A2DP_PLAY", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9aa3c566deb0202e8e55d673ae2135db24", null ],
      [ "PLATFORM_BUTTON_A2DP_PAUSE", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a6c32ec7118f852518d16b842485bf149", null ],
      [ "PLATFORM_BUTTON_A2DP_FORWARD", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9af4998a3e647aae7cf0ed40b8055ae8df", null ],
      [ "PLATFORM_BUTTON_A2DP_BACKWARD", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a11af6999415ab1fef26e17c19ea55345", null ],
      [ "PLATFORM_BUTTON_CALL_ANSWER", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9aca15e2bf23ac0df10c4ea824dfe731f0", null ],
      [ "PLATFORM_BUTTON_CALL_HANG_UP", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a168babaae7212082f2ccb44832ee227c", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_1_LONG", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a88c11c482fe2ce1ffdf570053384e33e", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_1_SHORT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a9d2021bfc5b6dcd978ef73151064b8a6", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_1_REPEAT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a374af60a0c581c1adcc57b63b54eccdb", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_2_LONG", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a729f728d6d4616f0781834f4602b4508", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_2_SHORT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9af42caf10dc0a5ae08277eb1b7d830991", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_2_REPEAT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a5c92a6148afdca2959d6b068b61817f5", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_3_LONG", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9ae469a7ce1e56523a5eb51228e9f64f70", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_3_SHORT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9af2806216ff14467995022a293dfa3847", null ],
      [ "PLATFORM_BUTTON_LRAC_BUTTON_3_REPEAT", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9a82ad214aa8d52e0134c0cfab9b423034", null ],
      [ "PLATFORM_BUTTON_LAST", "wiced__platform__audio__common_8h.html#a8fca5422c0e4caa63a5bb17eb800f8c9af5bb5c2943b8d4aceed806470b9ac0f9", null ]
    ] ],
    [ "platform_charger_event", "wiced__platform__audio__common_8h.html#a672cb5ed29d25584bbe9e148619dc628", [
      [ "PLATFORM_CHARGER_INSERTED", "wiced__platform__audio__common_8h.html#a672cb5ed29d25584bbe9e148619dc628a54fb6fff5e5e5c69fe166aebb67a8ace", null ],
      [ "PLATFORM_CHARGER_REMOVED", "wiced__platform__audio__common_8h.html#a672cb5ed29d25584bbe9e148619dc628ae1ea4acc35c042e13760a0a9caad0de5", null ],
      [ "PLATFORM_CHARGER_CHARGE_COMPLETE", "wiced__platform__audio__common_8h.html#a672cb5ed29d25584bbe9e148619dc628a418556aeb5c8320ad23d38403cb3ec41", null ]
    ] ],
    [ "platform_codec_route", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6", [
      [ "PLATFORM_CODEC_ROUTE_NONE", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6a0b72bfaeb6691b2fd4e714b781b622ef", null ],
      [ "PLATFORM_CODEC_ROUTE_CVSD", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6a6d079d7fe8610a551a35c679d010d9ac", null ],
      [ "PLATFORM_CODEC_ROUTE_MSBC", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6a0ccb97becf27cbbfe194ead66a7924ba", null ],
      [ "PLATFORM_CODEC_ROUTE_STREAM", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6a5c9c8bc4537abaae55529b0f944a1d05", null ],
      [ "PLATFORM_CODEC_ROUTE_AUDIO_INSERT", "wiced__platform__audio__common_8h.html#ad253c587deb4f2f81b60074cbd7cf3b6aca5514ba305212b1a1503a56759229f5", null ]
    ] ],
    [ "platform_global_state", "wiced__platform__audio__common_8h.html#afae90fef97f88b308934dc4dc3feed09", [
      [ "GLOBAL_POWER_UP_STATE", "wiced__platform__audio__common_8h.html#afae90fef97f88b308934dc4dc3feed09ab49c296ffcabdd67ffa254683b6a7f4a", null ],
      [ "GLOBAL_IDLE_STATE", "wiced__platform__audio__common_8h.html#afae90fef97f88b308934dc4dc3feed09a8ee4c19a667a2a9751aef29bbd57a0c3", null ],
      [ "GLOBAL_POWER_DOWN_STATE", "wiced__platform__audio__common_8h.html#afae90fef97f88b308934dc4dc3feed09a6d79fe0675c465204e9820341d12e471", null ]
    ] ],
    [ "platform_led_state", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505a", [
      [ "PLATFORM_LED_POWER_ON", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aafbd95a41b1b391a561348ab9bc8ebfb9", null ],
      [ "PLATFORM_LED_POWER_OFF", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa7accf4a6f88fee638b07d9ca079ac3e8", null ],
      [ "PLATFORM_LED_PAIRING", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa84ca17165154239878379dcf13f35ba1", null ],
      [ "PLATFORM_LED_LRAC_CONNECTION", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa62ab67a8cd0d2679241c83c7ef16707c", null ],
      [ "PLATFORM_LED_A2DP_CONNECTION", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa9d63280982de919bf28fdb5c518feb77", null ],
      [ "PLATFORM_LED_AVRC_CONNECTION", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa1c245c257096d963c244d1e1f01cccf3", null ],
      [ "PLATFORM_LED_HFP_CONNECTION", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aaf3d17dc9c7e24b5bee117b7b21b19cb8", null ],
      [ "PLATFORM_LED_HFP_VOICE_STATE", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aae2dd87f46b869a56ba0c8ad7a7161d48", null ],
      [ "PLATFORM_LED_A2DP_STREAM_STATE", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa23af96c91c004857a0e26738f60d0bac", null ],
      [ "PLATFORM_LED_CHARGER", "wiced__platform__audio__common_8h.html#aa57a2e43ef941ad057b09e6edbd3505aa1cdb707ba14ac3fda1724aad8a6ce8a6", null ]
    ] ],
    [ "platform_audio_side_set", "wiced__platform__audio__common_8h.html#a86d3a5bab4b82973b506432568d1931a", null ],
    [ "platform_charger_init", "wiced__platform__audio__common_8h.html#aad3702039b711047439709b762f16be5", null ],
    [ "platform_codec_route_set", "wiced__platform__audio__common_8h.html#a006701c5553c60a568602241021ade66", null ],
    [ "platform_handle_hci_command", "wiced__platform__audio__common_8h.html#a410ebf330279a0d1d5231ea59bcc3930", null ],
    [ "platform_init", "wiced__platform__audio__common_8h.html#af43e4244d1224b8624186b8627b7d59c", null ],
    [ "platform_led_set", "wiced__platform__audio__common_8h.html#a19c906cc69f64a9e77050ed16e751e05", null ],
    [ "platform_state_get", "wiced__platform__audio__common_8h.html#a07f0f8236b7aa95148ca30d407793197", null ],
    [ "platform_state_set", "wiced__platform__audio__common_8h.html#a8e5838137784fe149030e9e3058997ae", null ],
    [ "platform_switch_get", "wiced__platform__audio__common_8h.html#aae0eba150d33dd8452e673ae31c59279", null ],
    [ "platform_switch_set", "wiced__platform__audio__common_8h.html#a27d4960182aa8be00c97c0bf74e47f05", null ],
    [ "platform_volume_audio_insert_set", "wiced__platform__audio__common_8h.html#a1c697ceca08fc2f40ede7f1211c158ec", null ],
    [ "platform_volume_micro_set", "wiced__platform__audio__common_8h.html#a7a56a3b608be6e52c62e85b7cc88e52b", null ],
    [ "platform_volume_ring_set", "wiced__platform__audio__common_8h.html#ac9d08b7fb196b27a1ca681d16acf2f09", null ],
    [ "platform_volume_stream_set", "wiced__platform__audio__common_8h.html#ab157a33c0b3fe2730ca8c993a45e6d56", null ],
    [ "platform_volume_voice_set", "wiced__platform__audio__common_8h.html#a0e642a6df5dacf53ae54aeefed6f9b77", null ],
    [ "wass_button_init", "wiced__platform__audio__common_8h.html#acb347496f5d1786b99dc98af03d8ba32", null ],
    [ "wiced_platform_debug_enable", "wiced__platform__audio__common_8h.html#a9daff8168d65fbba2259f18cd1f2d7b8", null ]
];