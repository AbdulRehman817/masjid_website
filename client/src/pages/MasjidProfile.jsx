import React, { useState, useEffect } from 'react';
import { fetchProfile } from '../services/api';
import { Users, BookOpen } from 'lucide-react';

const MasjidProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const { data } = await fetchProfile();
                setProfile(data);
            } catch (error) {
                console.error("Failed to load profile", error);
            }
        };
        loadProfile();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-8 space-y-12">
            {/* Header */}
            <section className="text-center">
                <h1 className="text-4xl font-extrabold text-primary mb-4">{profile.name || "Masjid Name"}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{profile.mission || "Serving the community with faith and dedication."}</p>
            </section>

            {/* History & Mission */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                        <BookOpen className="w-8 h-8 text-primary mr-3" />
                        <h2 className="text-2xl font-bold">Our History</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        {profile.history || "Established in [Year], our Masjid has been a cornerstone of the community..."}
                    </p>
                </div>

                {/* Imam Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-secondary mr-3" />
                        <h2 className="text-2xl font-bold">Imam & Leadership</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold">{profile.imamName || "Imam Name"}</h3>
                            <p className="text-gray-600 italic">Head Imam</p>
                            <p className="text-gray-700 mt-2">{profile.imamBio || "Short bio about the Imam..."}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Management Committee */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Management Committee</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {profile.committeeMembers?.length > 0 ? (
                        profile.committeeMembers.map((member, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                                {member.contact && <p className="text-xs text-primary mt-1">{member.contact}</p>}
                            </div>
                        ))
                    ) : (
                        // Placeholder if no members
                        Array(3).fill(0).map((_, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200 opacity-50">
                                <h3 className="font-semibold text-lg">Committee Member</h3>
                                <p className="text-sm text-gray-500">Role</p>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default MasjidProfile;
