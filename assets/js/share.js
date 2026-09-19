/**
 * SAHHILHA (سهّلها) - Share & Export Utilities
 * Handles Web Share API, Clipboard copying with fallbacks, and file downloading.
 */

const ShareUtils = (() => {
  /**
   * Copy text to clipboard with modern API and fallback for older browsers
   */
  const copyToClipboard = async (text, successMsg = "تم النسخ بنجاح") => {
    if (!text) {
      if (window.App && window.App.showToast) {
        window.App.showToast("لا يوجد نص للنسخ", "warning");
      }
      return false;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        if (window.App && window.App.showToast) {
          window.App.showToast(successMsg, "success");
        }
        return true;
      } else {
        // Fallback for non-https or legacy environments
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        textArea.setAttribute("aria-hidden", "true");
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          if (window.App && window.App.showToast) {
            window.App.showToast(successMsg, "success");
          }
          return true;
        }
        throw new Error("execCommand failed");
      }
    } catch (err) {
      console.error("Clipboard copy error:", err);
      if (window.App && window.App.showToast) {
        window.App.showToast("تعذر النسخ إلى الحافظة تلقائياً", "danger");
      }
      return false;
    }
  };

  /**
   * Share content using native Web Share API with clipboard fallback
   */
  const shareContent = async ({ title, text, url }) => {
    const shareData = {
      title: title || document.title,
      text: text || "",
      url: url || window.location.href
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return true;
      } catch (err) {
        if (err.name !== "AbortError") {
          console.warn("Share API error:", err);
          return copyToClipboard(shareData.url, "تم نسخ الرابط لمشاركته");
        }
        return false;
      }
    } else {
      return copyToClipboard(shareData.url, "تم نسخ رابط المشاركة إلى الحافظة");
    }
  };

  /**
   * Trigger direct browser download for a Blob
   */
  const downloadBlob = (blob, filename) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  /**
   * Trigger download for Data URL (e.g. Canvas PNG)
   */
  const downloadDataUrl = (dataUrl, filename) => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename || "download.png";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
    }, 100);
  };

  return {
    copyToClipboard,
    shareContent,
    downloadBlob,
    downloadDataUrl
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ShareUtils;
}
