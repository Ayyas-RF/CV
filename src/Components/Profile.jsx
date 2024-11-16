import { Card } from "flowbite-react";
import pp from "../assets/pp.jpg";

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex flex-col md:flex-row justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-auto">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Ayyas Rasydan Fayadhi
                    </h3>
                    <span className="text-sm text-black-500 dark:text-gray-400">
                        <span className="text-red-600">Software</span> Developer
                    </span>
                </div>
                <div className="w-full md:w-auto">
                    <div className="py-2">
                        <h4 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                            Contact
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Phone:</span> +62
                            813-2184-4284
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Email:</span>{" "}
                            berrzert9@gmail.com
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">GitHub:</span>{" "}
                            github.com/Ayyas-RF
                        </p>
                        <h4 className="mt-4 mb-1 text-lg font-medium text-gray-900 dark:text-white">
                            Summary
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Saya Memiliki motivasi dan keinginan untuk membangun
                            aplikasi dan website yang memudahkan aktivitas
                            seseorang. Saya sangat antusias dalam berkontribusi
                            di project-project GitHub karena saya senang untuk
                            bekerja sama dan berdiskusi dengan tim. Saya sangat
                            tertarik dalam membangun aplikasi android yang
                            berbasis open source.
                        </p>
                        <h4 className="mt-4 mb-1 text-lg font-medium text-gray-900 dark:text-white">
                            Skills
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Hard Skills</span>
                            <ul className="list-disc list-inside">
                                <li>
                                    <span className="text-purple-500">C#</span>
                                </li>
                                <li>
                                    <span className="text-orange-400">
                                        HTML
                                    </span>
                                </li>
                                <li>
                                    <span className="text-blue-500">CSS</span>
                                </li>
                                <li>
                                    <span className="text-purple-700">
                                        Bootstrap
                                    </span>
                                </li>
                                <li>
                                    <span className="text-yellow-400">
                                        JavaScript (ES6+)
                                    </span>
                                </li>
                                <li>
                                    <span className="text-purple-400">PHP</span>
                                </li>
                                <li>
                                    <span className="text-blue-400">React</span>
                                </li>
                                <li>
                                    <span className="text-red-600">
                                        Laravel
                                    </span>
                                </li>
                                <li>
                                    <span className="text-teal-300">My</span>
                                    <span className="text-orange-400">SQL</span>
                                </li>
                                <li>
                                    <span className="text-green-400">Git</span>
                                </li>
                            </ul>
                            <br />
                            <span className="font-semibold">Soft Skills</span>
                            <ul className="list-disc list-inside">
                                <li>Positive Attitude</li>
                                <li>Attention to Detail</li>
                                <li>Adaptability</li>
                                <li>Empathy</li>
                                <li>Motivation</li>
                                <li>Conflict Resolution</li>
                                <li>Teamwork</li>
                                <li>Problem-solving</li>
                                <li>Collaboration</li>
                                <li>Communication</li>
                                <li>Time management</li>
                                <li>Creativity</li>
                            </ul>
                        </p>
                        <h4 className="mt-4 mb-1 text-lg font-medium text-gray-900 dark:text-white">
                            Hobbies and Interests
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            <li>Mendengarkan Musik Klasik</li>
                            <li>Bermain Video Games</li>
                            <li>Mengkostumisasi Setup Home Screen Android</li>
                            <li>Suka Mempelajari Sejarah (Terutama Perang Dunia)</li>
                            <li>Tertarik Dalam Ilmu Filsuf</li>
                        </ul>
                        <h4 className="mt-4 mb-1 text-lg font-medium text-gray-900 dark:text-white">
                            Projects
                        </h4>
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">
                                Project 1: Aplikasi Perpustakaan
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Tech Stack: C#
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Project individual pertama dengan menggunakan C#
                                sebagai bahasa pemrograman untuk merancang
                                aplikasi mengenai peminjaman buku di
                                perpustakaan.
                            </p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                                Project 2: Todo List App
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Tech Stack: HTML, CSS, JavaScript, Bootstrap
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Membuat aplikasi todo list dengan menerapkan
                                logika JavaScript dan fungsi-fungsi lainnya.
                                Juga menerapkan CSS dan Bootstrap untuk membuat
                                aplikasi menjadi lebih menarik.
                            </p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                                Project 3: Shopping Web
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Tech Stack: HTML, CSS, JavaScript, Bootstrap
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Website shopping yang didesain untuk memiliki
                                fitur seperti list produk dalam card dan
                                kemampuan untuk memasukkan barang ke dalam
                                keranjang yang kemudian akan dikalkulasi oleh
                                logika JavaScript.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Profile;
