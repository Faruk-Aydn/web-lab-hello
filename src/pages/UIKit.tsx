import { useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'
import Alert from '../components/ui/Alert'

export default function UIKit() {
    const [alertDismissed, setAlertDismissed] = useState(false)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    🎨 UI Kit
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    LAB-4 — Tüm component varyantları aşağıda sergilenmektedir.
                </p>
            </div>

            {/* ============================= */}
            {/* SECTION: BUTTONS             */}
            {/* ============================= */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Buttons
                </h2>

                {/* Varyant 1: Renk Varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Renk Varyantları
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Varyant 2: Boyut Varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Boyut Varyantları
                    </p>
                    <div className="flex flex-wrap items-end gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>

                {/* Varyant 3: Disabled */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Disabled Durumu
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" disabled>
                            Primary Disabled
                        </Button>
                        <Button variant="secondary" disabled>
                            Secondary Disabled
                        </Button>
                        <Button variant="danger" disabled>
                            Danger Disabled
                        </Button>
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* SECTION: INPUTS              */}
            {/* ============================= */}
            <section className="space-y-6 max-w-md">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Inputs
                </h2>

                {/* Varyant 4: Normal Input */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Normal Input
                    </p>
                    <Input
                        id="ui-normal"
                        label="Ad Soyad"
                        placeholder="Bir şey yazın..."
                    />
                </div>

                {/* Varyant 5: Hatalı Input */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Error Durumu
                    </p>
                    <Input
                        id="ui-error"
                        label="E-posta"
                        type="email"
                        defaultValue="geçersiz@"
                        error="Geçerli bir e-posta adresi girin."
                    />
                </div>

                {/* Varyant 6: Help Text */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Help Text
                    </p>
                    <Input
                        id="ui-help"
                        label="Şifre"
                        type="password"
                        helpText="En az 8 karakter, 1 büyük harf ve 1 rakam içermeli."
                    />
                </div>

                {/* Varyant 7: Disabled */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Disabled Durumu
                    </p>
                    <Input
                        id="ui-disabled"
                        label="Kullanıcı Adı"
                        disabled
                        value="faruk_aydin"
                        readOnly
                    />
                </div>
            </section>

            {/* ============================= */}
            {/* SECTION: CARDS               */}
            {/* ============================= */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Cards
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 8: Elevated */}
                    <Card
                        variant="elevated"
                        title="Elevated Card"
                        footer={<Button size="sm">Devam Et</Button>}
                    >
                        <p className="text-sm">
                            Gölge ile yükseltilmiş kart. Önemli içerikler veya
                            interaktif kartlar için kullanılır.
                        </p>
                    </Card>

                    {/* Varyant 9: Outlined */}
                    <Card
                        variant="outlined"
                        title="Outlined Card"
                        footer={<Button size="sm" variant="secondary">Detay</Button>}
                    >
                        <p className="text-sm">
                            Çerçeveli kart. İkincil öneme sahip içerikler
                            veya listeler için idealdir.
                        </p>
                    </Card>

                    {/* Varyant 10: Filled */}
                    <Card
                        variant="filled"
                        title="Filled Card"
                        footer={<Button size="sm" variant="ghost">Gör</Button>}
                    >
                        <p className="text-sm">
                            Dolgulu arka planlı kart. Arka plan rengiyle
                            ayrıştırılmış bölümler için kullanılır.
                        </p>
                    </Card>
                </div>
            </section>

            {/* ============================= */}
            {/* SECTION: ALERTS              */}
            {/* ============================= */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Alerts
                </h2>

                {/* Varyant 11: Info */}
                <Alert variant="info" title="Bilgi">
                    Bu bir bilgilendirme mesajıdır. Kullanıcıyı nötr bir şekilde bilgilendirir.
                </Alert>

                {/* Varyant 12: Success */}
                <Alert variant="success" title="Başarılı">
                    İşlem başarıyla tamamlandı! Değişiklikleriniz kaydedildi.
                </Alert>

                {/* Varyant 13: Warning */}
                <Alert variant="warning" title="Uyarı">
                    Oturumunuz 5 dakika sonra sona erecek. Çalışmanızı kaydedin.
                </Alert>

                {/* Varyant 14: Error + Dismissible */}
                {!alertDismissed ? (
                    <Alert
                        variant="error"
                        title="Hata"
                        dismissible
                        onDismiss={() => setAlertDismissed(true)}
                    >
                        Bağlantı kurulamadı. Lütfen internet bağlantınızı kontrol edin.
                    </Alert>
                ) : (
                    <div className="text-center">
                        <button
                            onClick={() => setAlertDismissed(false)}
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline cursor-pointer border-0 bg-transparent"
                        >
                            Error alert'i tekrar göster
                        </button>
                    </div>
                )}
            </section>

            {/* ============================= */}
            {/* SECTION: RESPONSIVE DEMO     */}
            {/* ============================= */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
                    Responsive Grid Demo
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ekranı küçültüp büyüterek grid'in nasıl değiştiğini gözlemleyin.
                    <code className="ml-1 bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    </code>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['Mobil: 1', 'Tablet: 2', 'Desktop: 4', 'Desktop: 4'].map((label, i) => (
                        <div
                            key={i}
                            className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center text-blue-800 dark:text-blue-200 text-sm font-medium"
                        >
                            {label} Sütun
                        </div>
                    ))}
                </div>
            </section>

            <div className="h-8" />
        </div>
    )
}
