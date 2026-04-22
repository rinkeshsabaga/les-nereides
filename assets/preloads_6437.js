
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CLC_3jHV.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DOSUTOZj.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor-legacy.C_JujaeR.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.r7oejUGV.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-useUnauthenticatedErrorModal-legacy.BTV9t4yU.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-unactionable-errors-legacy.BlCMah2q.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer-legacy.HOnsCsST.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.C-sb7zoJ.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-BusinessCustomerShippingAddressManager-legacy.DxKpOcOy.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-shared-legacy.BHlAbiZk.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-useReplaceShopPayInHistory-legacy.UXf0IJ_7.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-FullScreenBackground-legacy.B4Mv6F6z.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.CPmEwG72.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.CW8uV3bD.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B71sCYri.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-MarketsProDisclaimer-legacy.CFue8mWN.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-VatNumberValidationField-legacy.Cv8KMI2u.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEditorShopPayNavigation-legacy.BgGO9PCp.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-useForceShopPayUrl-legacy.BhCENIzJ.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo-legacy.BGkmSuIs.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment-legacy.DL5NHp-n.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine-legacy.CAoy-EfO.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview-legacy.DAMKLDMU.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo-legacy.Cw1ek-O2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.D0elAiWa.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField-legacy.C-eaRIbO.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-useShowShopPayOptin-legacy.37emc9wj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer-legacy.D4Gb7Th1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-RememberMeDescriptionText-legacy.CjGbaf5I.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary-legacy.CgFErcS2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery-legacy.B-UzhHwD.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice-legacy.Bw6Lt8EO.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.IyNLzLOH.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility-legacy.Bpwz2dBH.js","/cdn/shopifycloud/checkout-web/assets/c1/MobilePhoneField-legacy.CEIGYcqf.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown-legacy.CsfARyfO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal-legacy.DswsTKhw.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options-legacy.DWJHx-WM.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions-legacy.y-cduc3s.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector-legacy.g0VYTmtC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown-legacy.CH7j5ez5.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.BOK5Wh3e.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions-legacy.CoB7fGqP.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets-legacy.C-sn3Qxg.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.C_-dc5PN.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://cdn.shopify.com"];
      var fontPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0676/6683/7755/files/Louize-Regular.woff2?v=1708100526"];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  